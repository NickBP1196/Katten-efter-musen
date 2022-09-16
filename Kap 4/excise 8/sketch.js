function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(220);
  if (keyIsPressed) {
    if ((key == "v") || (key == "V")) {
      line(0 ,0 ,width/2 ,height);
      line(width/2 ,height ,width ,0);
    }
    if ((key == "a") || (key == "A")) {
      line(width ,height ,width/2 ,0);
      line(width/2 ,0 ,0 ,height);
      line(125, height/2, 375, height/2)
    }
  }
}
