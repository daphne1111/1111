let x,y;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
   background(220);
  m();
  
  /**for (let x = -windowWidth; x < windowWidth; x += 10) {
    for (let y = -windowHeight; y < windowHeight; y += 10) {
      noStroke();
  fill(0,random(60,90));
  square(x+mouseY*0.5,y+mouseX*0.5,9+sin(frameCount*0.01));
       if(x>1000){
    x=0;
     y=100;
  }}}**/
  x=frameCount*2;
  y=sqrt(x);
 
  push();
  fill(225)
  rect(windowWidth/2,windowHeight/2,600,50);
  pop();
  
   if(x>3000){
    x=0;
     y=100;
  }
  push();
  fill(0);
  rect(windowWidth/2,windowHeight/2,y,50);
  pop();
// console.log(x);
}


function m(){
  for (let x = -windowWidth; x < windowWidth; x += 10) {
    for (let y = -windowHeight; y < windowHeight; y += 10) {
      noStroke();
  fill(0,random(60,90));
  square(x+mouseY*0.5,y+mouseX*0.5,9+sin(frameCount*0.01));
       if(x>1000){
    x=0;
     y=100;
  }}}
}