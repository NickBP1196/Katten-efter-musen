let x 
let y 
let a = speed
let b = 0
let d = 20
let speed = 3

function setup() {
  createCanvas(400, 400);
  y = random(0, height);
  x = random(0, width);
}

function draw() {
  background(220);
  fill(255, 50, 50);
  circle(x, y, d);
  x+=speed*a;
  y+=speed*b;
  borderCheck();
}

function borderCheck() {
  if (x + d / 2 >= width) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }
}

  function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   b = speed;
   a = 0;
 }
 if (keyCode === UP_ARROW) {
   b = -speed;
   a = 0;
 }
 if (keyCode === LEFT_ARROW) {
   b = 0;
   a = -speed;
 }
 if (keyCode === RIGHT_ARROW) {
   b = 0;
   a = speed;
 }
}


