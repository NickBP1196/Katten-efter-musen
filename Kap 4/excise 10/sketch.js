let x = Math.random() * 400;
let y = Math.random() * 400;
let x2 = Math.random() * 400;
let y2 = Math.random() * 400;

function setup() {
  createCanvas(512, 512);
}

function draw() {
// Hvis venstre piletast er trykket ned bliver cirklen rykket 5 til venstre hvert frame.
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
// Hvis højre piletast er trykket ned bliver cirklen rykket 5 til højre hvert frame.
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
// Hvis up piletast er trykket ned bliver cirklen rykket 5 up hvert frame.
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
// Hvis ned piletast er trykket ned bliver cirklen rykket 5 ned hvert frame.
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  if (keyIsDown(65)) {
    x2 -= 5;
  }
  if (keyIsDown(68)) {
    x2 += 5;
  }
  if (keyIsDown(87)) {
    y2 -= 5;
  }
  if (keyIsDown(83)) {
    y2 += 5;
  }
background(255)
fill(180);
// x og y bliver manipuleret så at den bevæger sig.
  ellipse(x, y, 50, 50);
// rektangel mus
  rect(x2, y2, 50, 50);
}

