let ad = 370
let h = -100
let vidas = 3
let puntos = 0
let y = -30
let x  

function setup() {
  createCanvas(800, 600);
  fill(random(255),random(255),random(255));

}

function draw() {
  background(220);
  text('vidas=3', 670, 60);
   text('Puntos=0', 670, 30);
  square(ad, 498, 50);
 
 ellipse(10, y, 40);
 y++
 if(y > 600){
   
    y = -30;
   
    }
  
if(ad > 690){
   ad -=10
   }
  if(ad < 0){
   ad =+10
   }
}

function keyPressed() 
{
  if (key === 'a') {
     ad-=20;
  } else if (key === 'd') {
    ad+=20;
  }
}