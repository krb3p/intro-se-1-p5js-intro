function preload() {
  // Do any preloading you need to, like loadImage
}

function setup() {
  // Set up the area where you'll be executing your code.
  createCanvas(windowWidth, windowHeight); // These built-in variables let you make the canvas exactly the same size as the user's window.
}

var circleX = 50;
var circleY = 50;

function draw() {
  // p5 Will run these instructions continuously
  clear();
  var myPurple = color(152, 10, 232);
  fill(myPurple);
  ellipse(circleX, circleY, 80, 80);
  circleX += 2;
  circleY += 2;
}
