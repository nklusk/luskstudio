let thumbnails = [];
let thumbnailFiles = ['thumbnail0.png', 'thumbnail1.png'];
let thumbnailsLoaded = 0

function preload() {
  for (let i = 0; i < 2; i++){
    loadImage('assets/' +thumbnailFiles[i]);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Helvetica');
}


function draw() {
  imageMode(CENTER);
  background(125);
  console.log(displayWidth*pixelDensity())
  for (let i = 0; i < 2; i++){

    let squareXcoord = (((windowWidth%150)/2+75)+(i*150));
    let squareYcoord = 200
    square(squareXcoord, squareYcoord, 150);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}