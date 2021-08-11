var seaImg;
var shipImg;

var ship;
var sea;

function preload(){

  shipImg = loadAnimation("ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,800)
  sea = createSprite(200,180,400,20);
  sea.addImage(seaImg);
  sea.x = sea.width /2;
  sea.velocityX  = -4;

  ship = createSprite(100,275,10,10);
  ship.addAnimation("Moving",shipImg);
  ship.scale = 0.2;

}

function draw() {
  background("blue");
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  console.log(ship.y)
  drawSprites();
}