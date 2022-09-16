function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if (keyIsPressed === true) {
    if (keyCode === 70) {
      rect(mouseX, mouseY, 100)
    }
    else if (keyCode === 67) {
      circle(mouseX, mouseY, 100);
    }
    else if (keyCode === 69) {
      ellipse(mouseX, mouseY, 100);
    }
  }
}
