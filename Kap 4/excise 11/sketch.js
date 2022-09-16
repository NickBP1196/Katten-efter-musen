let x = Math.random() * 400;
let y = Math.random() * 400;
let x2 = Math.random() * 400;
let y2 = Math.random() * 400;
let Mus1 = 0
let Mus2 = 0
let ost1posX = Math.random() * 500;
let ost1posY = Math.random() * 500;
let ost2posX = Math.random() * 500;
let ost2posY = Math.random() * 500;
let ost3posX = Math.random() * 500;
let ost3posY = Math.random() * 500;
let ost4posX = Math.random() * 500;
let ost4posY = Math.random() * 500;
let ost5posX = Math.random() * 500;
let ost5posY = Math.random() * 500;
let distanceMus1;

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  distanceMus1 = sqrt((ost1posX-x)^2+(ost1posY-y)^2);

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
//ost
fill(255, 191, 0);
circle(ost2posX ,ost2posY ,25);
circle(ost3posX ,ost3posY ,25);
circle(ost4posX ,ost4posY ,25);
circle(ost5posX ,ost5posY ,25);

// Jeg prøver at få musen til kun at loade hvis den ikke er blevet ramt det virker dog ikke endnu.
if (!distanceMus1 < 75) {
  circle(ost1posX ,ost1posY ,25);
}

// mus
fill(180);
// x og y bliver manipuleret så at den bevæger sig.
  ellipse(x, y, 50, 50);
// rektangel mus
  rect(x2, y2, 50, 50);

// Mus får 1 point hvis den rammer en ost 
if (distanceMus1 < 75) {
  Mus1 += 1;
}  
}