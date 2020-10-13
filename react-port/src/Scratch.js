import React from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";

function Scratch(props) {
    let x = 50;
    let y = 50;
    let amp;
    let fft;
    let button;
    let audio;
    let sliderRate;
    let sliderVolume;

    const setup = (ctx, canvasParentRef) => {
        ctx.createCanvas(500, 500).parent(canvasParentRef);
        
        // GUI
        const toggleButton = () => {
            if (audio.isPlaying()) {// .isPlaying() returns a boolean
              audio.pause(); // .play() will resume from .pause() position
              button.html("play");
              //background(255, 0, 0);
            } else {
              audio.play();
              button.html("pause");
              ctx.background(0, 255, 0);
            }
        }
        
        // AUDIO
        audio = ctx.loadSound(props.audioPath, () => {
            // Callback func runs when finished loading
            audio.loop()
            audio.pause()
            amp = new window.p5.Amplitude();
            fft = new window.p5.FFT();
            sliderRate = ctx.createSlider(0, 1.5, 1, 0.01);
            sliderVolume = ctx.createSlider(0, 1, 0.5, 0.01);
            button = ctx.createButton("play");
            button.mousePressed(toggleButton);
        });
        
    };
 
    const draw = (ctx) => {
        ctx.background(0);
        ctx.ellipse(x, y, 70, 70);
        x++;
    };
    
    return <Sketch setup={setup} draw={draw} />
};

Scratch.defaultProps = {
    audioPath: "/audio/blinding_lights.mp3",
}

export default Scratch;