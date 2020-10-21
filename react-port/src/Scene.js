import React from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";

import { colors } from "./const.js";

export default (props) => {
    let song;
    let sliderRate;
    let sliderPan;
    let sliderVolume;
    let button;
    let amp;
    let fft;
    let change = 0;
    let colorIndex = 0;
    let width = 400;
    let height = 400;
    let circle;
    let diam = 0;

    const preload = (ctx) => {
      song = ctx.loadSound('/audio/blinding_lights.mp3');
    }

    const setup = (ctx, canvasParentRef) => {
      ctx.createCanvas(width, height).parent(canvasParentRef);
      song.loop();
      ctx.background(255, 0, 0);
      sliderRate = ctx.createSlider(0, 1.5, 1, 0.01);
      sliderVolume = ctx.createSlider(0, 1, 0.5, 0.01);
      button = ctx.createButton("play");
      button.mousePressed(toggleButton);
      amp = new window.p5.Amplitude();
      fft = new window.p5.FFT();
    };

    const toggleButton = (ctx) => {
      if (song.isPlaying()) {// .isPlaying() returns a boolean
        song.pause(); // .play() will resume from .pause() position
        button.html("play");
      } else {
        song.play();
        button.html("pause");
      }
    }

    const draw = (ctx) => {
      song.rate(sliderRate.value());
      song.setVolume(sliderVolume.value());
      ctx.background(colors[colorIndex]);
      var vol = amp.getLevel();
      diam = ctx.map(vol, 0, 0.1, 20, 400);
      circle = ctx.ellipse(width / 2, height / 2, diam, diam);
      change = change + 1;
      if (song.isPlaying() && change === 200) {
        change = 0;
        let spectrum = fft.analyze();
        let max = spectrum[0];
        let min = spectrum[0];
        for (let i = 1; i< spectrum.length; i += 10){
            if (spectrum[i] > max) max = spectrum[i];
            if (spectrum[i] < min) min = spectrum[i];
        }
        let avg = (max + min) / 2;
        colorIndex = Math.floor(ctx.map(avg, 0, 255, 0, 280));
        ctx.background(colors[colorIndex]);
      }

      let waveform = fft.waveform();
      ctx.noFill();
      ctx.beginShape();
      ctx.stroke(20);
      for (let i = 0; i < waveform.length; i++){
        let x = ctx.map(i, 0, waveform.length, 0, width);
        let y = ctx.map( waveform[i], -1, 1, 0, height);
        ctx.vertex(x,y);
      }
      ctx.endShape();
    };

    return <Sketch preload={preload} setup={setup} draw={draw} />;
};
