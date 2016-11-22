var capture;
var output;
var bgImage;

var threshold = 100;

var song;

var gif1;
var gif2;
var gif3;
var gif4;
var gif5;
var gif6;

function preload() {
  song = loadSound('assets/bb.mp3');
  gif1 = loadGif('assets/tubes.gif');
  gif2 = loadGif('assets/smallmoon.gif');
  gif3 = loadGif('assets/bottle.gif');
  gif4 = loadGif('assets/dreaming.gif');
  gif5 = loadGif('assets/jiggle.gif');
  gif6 = loadGif('assets/wormface.gif');
}

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(320, 240);

  bgImage = createImage(width, height);
  output = createImage(width, height);

  song.loop();
}

function draw() {
  capture.loadPixels();
  bgImage.loadPixels();
  output.loadPixels();

  image(gif4, 0, 0);

  for (var x = 0; x < capture.width; x++) {
    for (var y = 0; y < capture.height; y++) {
      var loc = (x + y * capture.width) * 4;
      var r1 = capture.pixels[loc];
      var g1 = capture.pixels[loc + 1];
      var b1 = capture.pixels[loc + 2];
      var a1 = capture.pixels[loc + 3];


      var r2 = bgImage.pixels[loc];
      var g2 = bgImage.pixels[loc + 1];
      var b2 = bgImage.pixels[loc + 2];
      var a2 = bgImage.pixels[loc + 3];

      var diff = dist(r1, g1, b1, r2, g2, b2);

      if ((r1 = 159) && (g1 = 146) && (b1 = 151) && (a1 = 255)) {
        a1 = 0;
        a2 = 0;
      }
      if ((r2 = 159) && (g2 = 146) && (b2 = 151) && (a2 = 255)) {
        a1 = 0;
        a2 = 0;
      }

      if (diff > threshold) {
        output.pixels[loc] = capture.pixels[loc];
        output.pixels[loc + 1] = capture.pixels[loc + 1];
        output.pixels[loc + 2] = capture.pixels[loc + 2];
        output.pixels[loc + 3] = capture.pixels[loc + 3];

      } else {
        bgImage.pixels[loc] = random(200, 255);
        bgImage.pixels[loc + 1] = random(10, 50);
        bgImage.pixels[loc + 2] = 0;
        bgImage.pixels[loc + 3];
      }
    }
  }

  output.updatePixels();
  image(output, 0, 0);

threshold = 150;

  image(gif6, 400, 40);
  image(gif1, 0, 0);
  image(gif2, 250, 200);
  image(gif3, 100, 50);
  scale(.2);
  image(gif5, -100, 1500);


}