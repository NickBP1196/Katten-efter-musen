// variabler der bruges under 
let y;
let justHitRightWall;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  // Der står at y er 200
  y = width / 2;
} 

function draw() { 
  background(220);
  // Hvis cirklen er i kanten af skærmen skal den gå den anden vej
  if (y > height - 25 || y < 0 + 25) {
    xspeed *= -1;
  }
  
  //Move
  y += xspeed;
  ellipse(width/2 , y, 50, 50);
}