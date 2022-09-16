let x = 100;
let y = 100;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
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
// Den gør så at cirklen bevæger sig i stedet for at bilve kopiret et andet sted hen hvis en af piletasterne bliver trykket.
  clear();
// x og y bliver manipuleret så at den bevæger sig.
  ellipse(x, y, 50, 50);
}