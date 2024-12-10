let x,y;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
   background(220);
  m();
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
}


function m(){
  for (let i = -windowWidth; x < windowWidth; i += 10) {
    for (let j = -windowHeight; y < windowHeight; j += 10) {
      noStroke();
  fill(0,random(60,90));
  square(i+mouseY*0.5,j+mouseX*0.5,9+sin(frameCount*0.01));
       if(i>3000){
    i=0;
     j=100;
  }}}
}
