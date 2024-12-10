
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
  rect(mouseX-250,mouseY-10,600,50);
  pop();
  
   if(x>3000){
    x=0;
     y=100;
  }
  push();
  fill(0);
  rect(mouseX-250,mouseY-10,y+10,50);
  pop();
  
  push();
  fill(0);
  rect(mouseX-250,mouseY-10,100,50);
  pop();
}


function m(){
  for (let i = -windowWidth; i < windowWidth; i += 50) {
    for (let j = -windowHeight; j < windowHeight; j += 50) {
      noStroke();
  fill(random(0,10),random(0,10),random(0,10),random(60,90));
  square(i+mouseY*0.5,j+mouseX*0.5,49+frameCount*0.0001);
       if(i>3000){
    i=0;
     j=100;
  }}}
}
