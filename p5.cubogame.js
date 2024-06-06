let ad = 370
let h = -100
let vidas = 3
let puntos = 0
let y = -30
let x
let sq;
let el;


function setup() {
  createCanvas(800, 600);
  fill(random(255), random(255), random(255));

}

function draw() {
  background(220);

  text('vidas=3', 670, 60);
  text('Puntos=0', 670, 30);
  sq = createSprite( ad, 498,50,50);
  
  sq.shapeColor = color(76,40,130);
  el = createSprite (10, y, 40);
  el.shapeColor = color(255, 177, 187);

  el.velocity.y = 1.0;

  if (ad > 790) {
    ad -= 10
  }
  if (ad < 0) {
    ad = +10
    drawSprites();
  }
}

function keyPressed() {
  if (key === 'a') {
    ad -= 20;
  } else if (key === 'd') {
    ad += 20;
  }
}