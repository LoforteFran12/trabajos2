let ad = 370
let h = -100

function setup() {
  createCanvas(800, 600);
  

}

function draw() {
  background(220);
  text('vidas=3', 670, 60);
   text('Puntos=0', 670, 30);
  square(ad, 498, 50);
  fill(213,155,0);
  
if(ad > 690){
   ad -=10
   }
  if(ad > 0){
   ad =+10
   }
}

function keyPressed() 
{
  if (key === 'a') {
     ad-=10;
  } else if (key === 'd') {
    ad+=10;
  }
}