let thumbnails = [];
let thumbnailFiles = ['thumbnail0.png', 'thumbnail1.png'];
let thumbnailsLoaded = 0

function preload() {
  for (let i = 0; i < 2; i++){
    loadImage('assets/' +thumbnailFiles[i], imageLoaded);
  }
}

function imageLoaded(img) {
    thumbnails.push(img);
    thumbnailsLoaded++;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Helvetica');

  let newWidth = 150; // Set your desired width here
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].resize(newWidth, 0);
  }
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

  for (let i = 0; i < thumbnails.length; i++) {
    let imageXcoord = (((windowWidth%150)/2+150)+(i*150));
    let imageYcoord = 275
    image(thumbnails[i], imageXcoord, imageYcoord);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}