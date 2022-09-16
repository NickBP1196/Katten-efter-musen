function setup() { 
  createCanvas(120, 120); 
  // Hvor tyk linjerne er
  strokeWeight(30); 
  } 
  function draw() { 
   background(204); 
   // Der er allerede en linje
   stroke(102); 
   line(40, 0, 70, height); 
   // Der bliver lavet en hvid linje hvis venstre musetast bliver trykket ned ellers er det en sort streg.
   if (mouseIsPressed) { //hvor kommer denne variable fra? Denne variable kommer fra musen og det er en boolean.
    if (mouseButton == LEFT) {  // og hvad med den? Denne variable kommer fra venstre musetast og det er en boolean.
     stroke(255); 
    } 
    else { 
     stroke(0); 
    } 
    line(0, 70, width, 50);
    } 
  } 
