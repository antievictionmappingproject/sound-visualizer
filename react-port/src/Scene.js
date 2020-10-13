import React from "react";
import Sketch from "react-p5";
import "p5/lib/addons/p5.sound";

import { colors } from "./const.js";

export default (props) => {
    let song;
    let sliderRate;
    let sliderPan;
    let button;
    let amp;
    let fft;
    let change = 0;
    let colorIndex = 0;
    let width = 400;
    let height = 400;

    const setup = (ctx, canvasParentRef) => {
        
    };

    const draw = (ctx) => {
        
    };

    return <Sketch setup={setup} draw={draw} />;
};
