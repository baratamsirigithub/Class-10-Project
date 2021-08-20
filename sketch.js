var sea, ship;
var seaImg, shipImg1;


function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation ("ship-1.png" ,"ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,100,100);
  sea.addImage(seaImg);

  ship = createSprite(130,200,30,30);
ship.scale = 0.25;

ship.addAnimation("Floating", shipImg1);
sea.velocityX = 0.5;
sea.scale= 0.25;

}

function draw() {
  background("blue");
  
 drawSprites();
}