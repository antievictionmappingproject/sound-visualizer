import React from "react";
import Sketch from "react-p5";
import p5 from "p5";
import "./lib/p5.sound";
import {colors} from "./const.js";

export default (props) => {
    let x = 50;
    const y = 50;

    let song;
    var sliderRate;
    var sliderPan;
    var button;
    var amp;
    var fft;
    var change = 0;
    var colorIndex = 0;
    var width = 400;
    var height = 400;

    function preload() {
      //song = loadSound('alexxint.mp3');
    }

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(width, height).parent(canvasParentRef);
        //song.loop(); // song is ready to play during setup() because it was loaded during preload
        p5.background(255, 0, 0);
        //sliderRate = createSlider(0, 1.5, 1, 0.01);
        //sliderVolume = createSlider(0, 1, 0.5, 0.01);
        //button = createButton("play");
        //button.mousePressed(toggleButton);
        //amp = new p5.Amplitude();
        //fft = new p5.FFT();
    };

    const draw = (p5) => {
        p5.background(0);
        p5.ellipse(x, y, 70, 70);
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        x++;

        //song.rate(sliderRate.value());
        //song.setVolume(sliderVolume.value());
        p5.background(colors[colorIndex]);

        //var vol = amp.getLevel();
        var vol = 0;
        var diam = p5.map(vol, 0, 0.1, 20, 400);
        var circle = p5.ellipse(width / 2, height / 2, diam, diam);

      //&& amp.getLevel() > 0.3 && change > 20

        change = change + 1;
        /*if (song.isPlaying() && change == 200) {
          change = 0;
          let spectrum = fft.analyze();
          let max = spectrum[0];
          let min = spectrum[0];
          for (let i = 1; i< spectrum.length; i += 10){
              if (spectrum[i] > max) max = spectrum[i];
              if (spectrum[i] < min) min = spectrum[i];
          }
          let avg = (max + min) / 2;
          colorIndex = Math.floor(map (avg, 0, 255, 0, 280));
          background(colors[colorIndex]);
          //console.log(colorIndex);
        }*/

        //let waveform = fft.waveform();
        var waveform = new Array(255).fill(0.0)
        p5.noFill();
        p5.beginShape();
        p5.stroke(20);
        for (let i = 0; i < waveform.length; i++){
          let x = p5.map(i, 0, waveform.length, 0, p5.width);
          let y = p5.map( waveform[i], -1, 1, 0, p5.height);
          p5.vertex(x,y);
        }
        p5.endShape();

    };

    return <Sketch setup={setup} draw={draw} />;
};
