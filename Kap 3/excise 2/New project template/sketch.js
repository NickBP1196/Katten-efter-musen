function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if (mouseIsPressed === true){
    if (mouseButton === LEFT) {
      circle(mouseX,mouseY,100);
    }
    else if (mouseButton === RIGHT){
      rect(mouseX, mouseY, 100)
    }
  }
}
