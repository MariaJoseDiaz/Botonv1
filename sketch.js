var bgcolor;

  var x = 100;
  var y = 100;
  var rect_widht = 200;
  var rect_height = 150;
  
function setup () {
  createCanvas(windowWidth, windowHeight);
  bgcolor = color(200);
 // createButton("Change Background");
}

function touches[] {
  //if touches[x, y, rect_widht, rect_height]
  if (mouseX >= x && mouseX <= x + rect_widht && mouseY >= x && mouseY <= x + rect_height)
  bgcolor = color(random(0, 170), random(0, 170), random(0, 170));
}

function draw () {
  background(bgcolor);
  fill(255, 0, 0);
  rect(x, y, rect_widht, rect_height);
  fill(255);
  textSize(60);
  text('Click on background of canvas.', 100, 100);
}
