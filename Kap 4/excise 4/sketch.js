// variabler der bruges under 
let x;
let justHitRightWall;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  // Der står at x er 200
  x = width / 2;
} 

function draw() { 
  background(220);
  // Hvis cirklen er i kanten af skærmen skal den gå den anden vej
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  
  //Move
  x += xspeed;
  ellipse(x, height/2, 50, 50);
}
