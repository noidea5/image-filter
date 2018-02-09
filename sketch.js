var img;


function preload() {
  img = loadImage("images/boy.png");//change "boy.png" to a different image
}


function setup() {
  createCanvas(img.width, img.height);
  background(200, 200, 200);
  image(img, 0, 0); //draw the image to the canvas

  loadPixels();

  //this gets rid of the green and blue pixels
  for (var i = 0; i < pixels.length; i+=4) {
    // pixels[i] = 0; //i is red
    // pixels[i+1] = 0; //i+1 is green
    // pixels[i+2] = 0; //i+2 is blue
  };

  layer(0); // color the image
  layer(1);
  layer(2);


  updatePixels();
}


// turns the image into 4 shades of one color
// input 0, 1, or 2 for red, green, or blue, respectively
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