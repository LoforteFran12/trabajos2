
let h = -100
let y = -30
let x
let player;
let enemy;
function setup() {
  createCanvas(800, 600);
  enemy = createSprite (random(0,800), y, 40);
  enemy.shapeColor = color(random(255), random(255), random(255));
  player = createSprite( 370, 498,50,50);
  player.shapeColor = color(76,40,130);
}

function draw() {
  clear();
  background(220,220,220);
  enemy.velocity.y = 5;

  if(enemy.position.y > 600){
enemy.position.y = y
enemy.position.x = random(0,800)
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