
  var rect_widht = 60;
  var rect_height = 10;
  var bgcolor;


function setup() {
      createCanvas(windowWidth, windowHeight);
}



function draw() {
   bgcolor = color(204);
   background(bgcolor);
  
   rect(100,100,rect_widht,rect_height);
  //Fill(242, 123, 222);
   
     textSize(height/30);
     textAlign(CENTER);
     textStyle(BOLD);
     fill(0);
     noStroke();
     text("EARTHQUAKE INTENSITY", width/2,height - height/1.1);
     
    fill(0);
    noStroke();    
    
    textSize(height/30);
    textAlign(CENTER);
    textStyle(NORMAL);
    text("Magnitude", width/2, height - height/5);
        
    textSize(height/20);
    textAlign(CENTER);
    textStyle(BOLD);
    text("1",width/2, height - height/6.7);
    
    
    textSize(height/40);
    textAlign(CENTER);
    textStyle(BOLD);
    text("see results",(width/8)*2, (height/15)*14);
    rectMode(CENTER);
    noFill();
    stroke(255);
    rect(((width/8)*2), ((height/15)*14)-3, rect_widht, rect_height);

  
    fill(0)
    noStroke()
    textSize(height/40);
    textAlign(CENTER);
    textStyle(BOLD);
    text("try again",(width/8)*6, (height/15)*14);
    rectMode(CENTER);
    noFill();
    stroke(255);
    rect(((width/8)*6), ((height/15)*14)-3, rect_widht, rect_height);

   
    translate(0, -40);
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse (width/2, height/2, 100* 2, 100 * 2);
  

    
}

  function mousePressed () {
      //if touches[x, y, rect_widht, rect_height]
  //  if (mouseX >= ((width/8)*2) && mouseX <= (((width/8)*2) + rect_widht) && mouseY >= ((width/8)*2) && mouseY <= (((width/8)*2) + rect_height));
    if (mouseX >= 100 && mouseX <= 100 + rect_widht && mouseY >= 100 && mouseY <= 100 + rect_height){
    bgcolor = color(random(0, 170), random(0, 170), random(0, 170));
    }
    // background(0);
 
}


/*
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

function mousePressed () {
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

*/
