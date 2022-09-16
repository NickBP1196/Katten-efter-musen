function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 // Der bliver lavet en linje når n er trykket ned og en anden når h er trykket ned.
 if (keyIsPressed) {  //hvad er denne variable mon for en type? Datatypen er boolean.
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } 
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } 
 } 
 // Der er allerede 2 linjer så at det enten kan danne et H eller N.
line(30, 20, 30, 100); 
line(90, 20, 90, 100); 
} 