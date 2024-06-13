
let h = -100
let y = -30
let Vidas 
let Puntos = 0
let player;
let enemy;
function setup() {
  createCanvas(800, 600);
  Vidas = 3;
  enemy = createSprite (random(0,800), y, 40);
  enemy.shapeColor = color(random(255), random(255), random(255));
  enemy1 = createSprite (random(0,800), y, 40);
  enemy1.shapeColor = color(random(255), random(255), random(255));
  enemy2 = createSprite (random(0,800), y, 40);
  enemy2.shapeColor = color(random(255), random(255), random(255));
  enemy3 = createSprite (random(0,800), y, 40);
  enemy3.shapeColor = color(random(255), random(255), random(255));
  enemy4 = createSprite (random(0,800), y, 40);
  enemy4.shapeColor = color(random(255), random(255), random(255));
  player = createSprite( 370, 498,50,50);
  player.shapeColor = color(76,40,130);
}

function draw() {
  clear();
  background(220,220,220);
  text(Vidas, 790, 10);
  enemy.velocity.y = 5;
  enemy1.velocity.y = 5;
  enemy2.velocity.y = 5;
  enemy3.velocity.y = 5;
  enemy4.velocity.y = 5;

  if(enemy.position.y > 600){
enemy.position.y = y
enemy.position.x = random(0,800)
  }
  if(enemy1.position.y > 600){
enemy1.position.y = y
enemy1.position.x = random(0,800)
      }
  if(enemy2.position.y > 600){
enemy2.position.y = y
enemy2.position.x = random(0,800)
      }
  if(enemy3.position.y > 600){
enemy3.position.y = y
enemy3.position.x = random(0,800)
      }
if(enemy4.position.y > 600){
enemy4.position.y = y
enemy4.position.x = random(0,800)
  }

  if(enemy.overlap(player)){
    Vidas = -1;
    draw()
  }

  drawSprites();
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    if (player.position.x < 790) {
      player.position.x += 20
    }
  }
  else if (keyCode == LEFT_ARROW) {
    if (player.position.x > 9) {
      player.position.x -= 20
    }
  }
}