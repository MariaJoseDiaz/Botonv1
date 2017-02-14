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

function touchStarted () {
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


var energy = 0; //starting value of energy
  var singleShake = 0;
  var maxEnergy= 1000; //max energy for eathquake
 -var button1;
 -var button2;
 +//var button1;
 +//var button2;
  var cover;
  
  var myImage1;
  var myImage2;
  
  var fontTitle;
  
 +var seeresults
 +var tryagain
 +
  function preload() {
      cover = loadImage("Tavola disegno 18-100.jpg");
      myImage1 = loadImage("prova1.png");
      myImage2 = loadImage("prova2.jpg");
 -      fontTitle = loadFont("OCRBStd.otf");
 +    fontTitle = loadFont("OCRBStd.otf");
  }
      
  function setup(){
 @@ -64,14 +67,33 @@ function draw(){
      textAlign(CENTER);
      textStyle(BOLD);
      text(magnitude,width/2, height - height/6.7);
 +        
 +        //buttons
 +        
 +     // see results   
 +    textSize(height/10);
 +    textAlign(CENTER);
 +    textStyle(BOLD);
 +    text("see results",width/7, height - (height/15)*14);
             
 -    button1 = createButton("See results");
 +        
 +      //try again
 +        
 +    textSize(height/10);
 +    textAlign(CENTER);
 +    textStyle(BOLD);
 +    text("try again",(width/7)*5, height - (height/15)*14);
 +        
 +   /* button1 = createButton("See results");
      button1.position(width/7,(height/15)*14);
      button1.touchStarted(results);
          
      button2 = createButton("Try again");
      button2.position((width/7)*5, (height/15)*14);
      button2.touchStarted(clearEverything);   
 +  
 +      }
 +   */
          
      } else if(energy >= maxEnergy) {
      textSize(height/20);
 @@ -80,7 +102,7 @@ function draw(){
      text("10",width/2, height - height/6.7)
      energy = maxEnergy;
      background(204,0,0);
 -   }
 + 
      
      //draw dots and given methods (actions)
        noStroke();
 @@ -132,19 +154,29 @@ function QuakeDots(){
  }
  
      // result buttons
 - function results() {
 +    
 + function touchStarted () {
 +  if (mouseX >= x && mouseX <= x + rect_widht && mouseY >= x && mouseY <= x + rect_height)
 +   background(204);
 +   energy = 0;
 +}
 +
 +    /* function results() {
       if (magnitude <= 6){
           image(myImage1,0,0,windowWidth,windowHeight);
       } else {
           image(myImage2,0,0,windowWidth,windowHeight);
       }
 +     }
 +     */
    
 - }
 + 
  
 - function clearEverything() {
 +/* function clearEverything() {
      background(204);
      energy = 0;
   }
 +*/
  
  function windowResized(){
      resizeCanvas(windowWidth,windowHeight);
