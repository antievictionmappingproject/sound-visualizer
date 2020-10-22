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
        // We use `ctx` instead of `p5` to avoid conflicts with window.p5
        // window.p5 is where p5.sound.js binds our audio constructions e.g.
        // Amplitude(), FFT(), etc...
        ctx.createCanvas(500, 500).parent(canvasParentRef);
        
        
        const toggleButton = () => {
            if (audio.isPlaying()) {
                audio.pause();
                button.html("play");
            } else {
                audio.play();
                button.html("pause");
            }
        }
        
        
        audio = ctx.loadSound(props.audioPath, () => {
            // Callback func runs when finished loading, using
            // because sync issues with react-p5's preload
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