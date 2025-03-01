let thumbnails = [];
let numThumbnails = 2;

// function preload() {
//   for (let i = 0; i < numThumbnails; i++){
//     thumbnails[i] = loadImage('/assets/thumbnail${i}.png');
//   }
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Helvetica');
}


function draw() {
  background(125);
  console.log(displayWidth*pixelDensity())
  for (let i = 0; i < numThumbnails; i++){

    let squareXcoord = (((windowWidth%20)/2)+(i*20));
    let squareYcoord = 40
    square(squareXcoord, squareYcoord, 20);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}