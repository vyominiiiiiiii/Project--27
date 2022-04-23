var row1 = [
  { x: 12, y: 10 },
  { x: 30, y: 18 },
  { x: 46, y: 10 },
  { x: 65, y: 19 },
  { x: 94, y: 10 },
  { x: 110, y: 25 },
  { x: 134, y: 15 },
  { x: 156, y: 19 },
  { x: 188, y: 15 },
  { x: 223, y: 17 },
  { x: 240, y: 20 },
  { x: 264, y: 15 },
  { x: 286, y: 18 },
  { x: 306, y: 15 },
  { x: 322, y: 23 },
  { x: 343, y: 20 },
  { x: 366, y: 18 },
  { x: 406, y: 13 },
  { x: 426, y: 20 },
  { x: 456, y: 18 },
  { x: 486, y: 14 },
  { x: 497, y: 25 },
];

var row2 = [
  { x: 12, y: 45 },
  { x: 30, y: 53 },
  { x: 46, y: 45 },
  { x: 65, y: 54 },
  { x: 94, y: 45 },
  { x: 110, y: 60 },
  { x: 134, y: 50 },
  { x: 156, y: 54 },
  { x: 188, y: 50 },
  { x: 223, y: 52 },
  { x: 240, y: 55 },
  { x: 264, y: 50 },
  { x: 286, y: 53 },
  { x: 306, y: 50 },
  { x: 322, y: 58 },
  { x: 343, y: 55 },
  { x: 366, y: 53 },
  { x: 406, y: 48 },
  { x: 426, y: 55 },
  { x: 456, y: 53 },
  { x: 486, y: 49 },
  { x: 497, y: 60 },
];

var row3 = [
  { x: 12, y: 80 },
  { x: 30, y: 88 },
  { x: 46, y: 80 },
  { x: 65, y: 87 },
  { x: 94, y: 80 },
  { x: 110, y: 95 },
  { x: 134, y: 85 },
  { x: 156, y: 87 },
  { x: 188, y: 85 },
  { x: 223, y: 87 },
  { x: 240, y: 90 },
  { x: 264, y: 85 },
  { x: 286, y: 88 },
  { x: 306, y: 85 },
  { x: 322, y: 93 },
  { x: 343, y: 90 },
  { x: 366, y: 88 },
  { x: 406, y: 83 },
  { x: 426, y: 90 },
  { x: 456, y: 88 },
  { x: 486, y: 84 },
  { x: 497, y: 95 },
];
var starImg;
var bgImg;

function preload() {
  starImg = loadImage("star.png");
  bgImg = loadImage("Night-background.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // write a line of code to set background
  

  for (var i = 0; i < row1.length; i++) {
    push();
    imageMode(CENTER);
    image(starImg, row1[i].x, row1[i].y, 12, 12);
    pop();
  }

  for (var i = 0; i < row2.length; i++) {
    push();
    imageMode(CENTER);
    image(starImg, row2[i].x, row2[i].y, 12, 12);
    pop();
  }

  // write a for loop to display a third row of stars
  // coordinates of the third row3 is given.





}
