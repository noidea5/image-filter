/*
  -min and max rgb values
  -range of rgb values
*/

var img;
var pixel_average = [];
var pixels_copy = [];
var fake_i;
var red_box;
var green_box;
var blue_box;

function preload() {
  img = loadImage("images/boy.png");
}

function setup() {
  createCanvas(img.width, img.height);
  background(200, 200, 200);
  image(img, 0, 0); //draw the image to the canvas

  red_box = createCheckbox('Red layer', true);
  red_box.changed(redCheck);
  red_box.position(img.width+20, 50);

  green_box = createCheckbox('Green layer', true);
  green_box.changed(greenCheck);
  green_box.position(img.width+20, 75);

  blue_box = createCheckbox('Blue layer', true);
  blue_box.changed(blueCheck);
  blue_box.position(img.width+20, 100);

  loadPixels();

  layer(0);
  layer(1);
  layer(2);

  //copy pixels aray
  pixels_copy = pixels.map(x => x*1);

  updatePixels();
}


function layer(color) {
  for (let i = 0; i < pixels.length; i+=4) {
    if (pixels[i+color] >= 194) {
      pixels[i+color] = 255;
    } else if (pixels[i+color] >= 128) {
      pixels[i+color] = 194;
    } else if (pixels[i+color] >= 64) {
      pixels[i+color] = 128;
    } else {
      pixels[i+color] = 64;
    };
  }; 
}


function redCheck() {
  if (this.checked()) {

    loadPixels();

      for (let i = 0; i < pixels_copy.length; i+=4) {
        pixels[i] = pixels_copy[i];
      };

    updatePixels();

  } else {

    loadPixels();

      for (let i = 0; i < pixels.length; i+=4) {
        pixels[i] = 0;
      };

    updatePixels();

  };
};

function greenCheck() {
  if (this.checked()) {

    loadPixels();

      for (let i = 0; i < pixels_copy.length; i+=4) {
        pixels[i+1] = pixels_copy[i+1];
      };

    updatePixels();

  } else {

    loadPixels();

      for (let i = 0; i < pixels.length; i+=4) {
        pixels[i+1] = 0;
      };

    updatePixels();

  };
};

function blueCheck() {
  if (this.checked()) {

    loadPixels();

      for (let i = 0; i < pixels_copy.length; i+=4) {
        pixels[i+2] = pixels_copy[i+2];
      };

    updatePixels();

  } else {

    loadPixels();

      for (let i = 0; i < pixels.length; i+=4) {
        pixels[i+2] = 0;
      };

    updatePixels();

  };
};



