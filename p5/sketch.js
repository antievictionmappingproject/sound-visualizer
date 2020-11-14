

let song;
var play_button;
var fwd_button;
var bck_button;
var amp;
var fft;
var change = 0;
var colorIndex = 0;
let circle_arr = [];
var vol_arr = [];
var vol_avg;
let average = (array) => array.reduce((a, b) => a + b) / array.length;
const color_change_rate = 3;
let canvas;
let cur_time;
let red = "#de3826";

function preload() {
  song = loadSound('alexxint.mp3');
}

function setup() {
  canvas = createCanvas(400, 400);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(255, 255, 255);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  play_button = createButton("pause");
  bck_button = createButton("<<10");
  fwd_button = createButton("10>>");
  play_button.mousePressed(toggleButton);
  bck_button.mousePressed(forwardButton);
  fwd_button.mousePressed(backButton);
  canvas.mousePressed(screenClick);
  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function toggleButton() {
  if (song.isPlaying()) {// .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    cur_time = song.currentTime;
    play_button.html("play");
  } else {
    song.play().time(cur_time);
    play_button.html("pause");
  }
}

function forwardButton() {
  cur_time = song.currentTime + 10;
  song.pause();
  song.play(cur_time);
}

function backButton() {
  cur_time = song.currentTime - 10;
  song.pause();
  song.play().time(cur_time);
}

function screenClick() {
  const click = new BeatCircle(mouseX, mouseY);
  click.run();
}

function draw() {

  class BeatCircle {
    constructor(x, y) {
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
      stroke(red);
      strokeWeight(5);
      noFill();
      ellipse(this.x, this.y, this.r, this.r);
    }
    isDead() {
      if (this.lifespan < 0.0) {
        return true;
      } else {
        return false;
      }
    }
  }

  song.setVolume(sliderVolume.value());
  background(255,255,255);
  var vol = amp.getLevel();
  vol_arr.push(vol);
  if (vol_arr.length > 20) {
    vol_arr.shift();
  }
  diam = map(vol, 0, 0.1, 20, 400);
  noFill();
  beginShape();
  stroke(red);
  strokeWeight(5);
  var circle = ellipse(width / 2, height / 2, diam, diam);
  endShape();
  vol_avg = average(vol_arr);

  if (vol > color_change_rate * vol_avg) {
    change = change + 1;
    if (change == 10) {
      circle_arr.push(new BeatCircle(width / 2, height / 2));
      change = 0;
    }
  }

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(0, 0, 0);
  strokeWeight(2);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();

  // beatCircle
  for (let i = circle_arr.length - 1; i >= 0; i--) {
    const c = circle_arr[i];
    c.run();
    if (c.isDead()) {
      circle_arr.splice(i, 1);
    }
  }

}
