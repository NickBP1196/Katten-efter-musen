function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseX >= 200){
    rect(100,100,200);
  }
  else {
    circle(200,200,200);
   }
}
