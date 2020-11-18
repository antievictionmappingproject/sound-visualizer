import React, { useState, useRef, useEffect, useContext } from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";
import AudioPlaybackContext from "./AudioPlaybackContext";

import { colors } from "./const.js";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default (props) => {
    const { timelineActions, audioFilePath } = props
    const audioRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const audioPlayback = useContext(AudioPlaybackContext);

    let audio;
    let sliderVolume;
    let button;
    let ampRef = useRef(null);
    let fftRef = useRef(null);
    let change = 0;
    let colorIndex = 0;
    let width = 200;
    let height = 200;
    let red = "#de3826";
    let circle;
    let diam = 0;
    let circle_arr = [];
    var vol_arr = [];
    var vol_avg;
    let average = (array) => array.reduce((a, b) => a + b) / array.length;
    const color_change_rate = 3;

    const previousAudioPlayback = usePrevious(audioPlayback)

    useEffect(() => {
      if (previousAudioPlayback && audioRef.current) {
        const { paused, volume } = audioPlayback
        const { paused: prevPaused, volume: prevVolume } = previousAudioPlayback
        if (paused && !prevPaused) { audioRef.current.pause(); }
        if (!paused && prevPaused) { audioRef.current.play(); }
        if (volume !== prevVolume) { audioRef.current.setVolume(volume) }
      }
    }, [audioPlayback, audioRef])

    const setup = (ctx, canvasParentRef) => {
      Promise.resolve().then(() => {
        return new Promise((resolve, reject) => {
          audioRef.current = ctx.loadSound(audioFilePath, () => {
            resolve()
          })
        })
      }).then(() => {
        ctx.createCanvas(width, height).parent(canvasParentRef);
        audioRef.current.loop();
        audioRef.current.pause();

        timelineActions.forEach((ta, i) => {
          audioRef.current.addCue(ta.seconds, ta.action)
        })

        ctx.background(255, 255, 255);
        ampRef.current = new window.p5.Amplitude();
        fftRef.current = new window.p5.FFT();
        setLoaded(true)
      })
    };

    const draw = (ctx) => {
      if (!loaded) { return }
      const amp = ampRef.current;
      const fft = fftRef.current;
      ctx.background(255, 255, 255);
      var vol = amp.getLevel();
      vol_arr.push(vol);
      if (vol_arr.length > 20) {
        vol_arr.shift();
      }
      diam = ctx.map(vol, 0, 0.1, 20, 400);
      ctx.noFill();
      ctx.beginShape();
      ctx.stroke(red);
      ctx.strokeWeight(5);
      circle = ctx.ellipse(width / 2, height / 2, diam, diam);
      ctx.endShape();

      vol_avg = average(vol_arr);
      if (vol > color_change_rate * vol_avg) {
        change = change + 1;
        if (change == 10) {
          circle_arr.push(new BeatCircle(width / 2, height / 2, ctx));
          change = 0;
      }

      let waveform = fft.waveform();
      ctx.noFill();
      ctx.beginShape();
      ctx.stroke(0, 0, 0);
      ctx.strokeWeight(2);
      for (let i = 0; i < waveform.length; i++){
        let x = ctx.map(i, 0, waveform.length, 0, width);
        let y = ctx.map( waveform[i], -1, 1, 0, height);
        ctx.vertex(x,y);
      }
      ctx.endShape();

      for (let i = circle_arr.length - 1; i >= 0; i--) {
        const c = circle_arr[i];
        c.run();
        if (c.isDead()) {
          circle_arr.splice(i, 1);
        }
      }
    };

    return <Sketch setup={setup} draw={draw} />;
};

class BeatCircle {
  constructor(x, y, ctx) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = 20;
    this.m = 6;
    this.lifespan = 300;
  }
  run() {
    this.update();
    this.display();
  }
  update() {
    this.r += this.m;
    this.lifespan -= 2.0;
  }
  display() {
    this.ctx.stroke(red);
    this.ctx.strokeWeight(5);
    this.ctx.noFill();
    this.ctx.ellipse(this.x, this.y, this.r, this.r);
  }
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
