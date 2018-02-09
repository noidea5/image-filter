/*
  -min and max rgb values
  -range of rgb values
*/

var img;
var pixel_average = [];
var fake_i;

function preload() {
  img = loadImage("images/boat.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  background(200, 200, 200);
  image(img, 0, 0); //draw the image to the canvas

  loadPixels();

  for (var i = 0; i < pixels.length; i+=4) {
    if (pixels[i+1] > 135) {
      pixels[i] = 255;
      pixels[i+1] = 255;
      pixels[i+2] = 130;
    } else {
      pixels[i] = 100;
      pixels[i+1] = 200;
      pixels[i+2] = 100;
    }    

  //   pixels[i+1] = 0;
  //   pixels[i+2] = 0;
  };

  // layer(0, 128);
  // layer(1, 64);
  // layer(2, 64);



  updatePixels();
}


function layer(color, step) {
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
    // fake_i = i;
    // for (let o = 255; o - step > 0; o-=step) {
    //   if (pixels[fake_i+color] >= o) {
    //     pixels[fake_i+color] = o;
    //   };
    // };
  };
}


//function to find the average value of a color in the image. values 0,1,2 for rgb respectively
function colorAverage(color) {
  let sum = 0;
  let avg;
  let color_mean = [];

  //map the respective pixel value to the color_mean array
  for (let i = color; i < pixels.length; i+=4) {
    color_mean.push(pixels[i]);
  };

  //finding sum of all values then averaging them out
  for (let i = 0; i < color_mean.length; i++) {
    sum += color_mean[i];
  };
  avg = Math.round(sum/color_mean.length);

  return avg;
}


//average out all the colors in a single pixel
function pixelAverage() {
  let sum = 0;

  for (let i = 0; i < pixels.length; i+=4) {
    sum = sum + pixels[i] + pixels[i+1] + pixels[i+2];
    pixel_average.push(sum/3);
    //push these three zeros to align the average with "pixels" array
    pixel_average.push(0);
    pixel_average.push(0);
    pixel_average.push(0);
    sum = 0;
  };
}


