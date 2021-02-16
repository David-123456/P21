var car,wall;
var speed, weight;
var wall, thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car=creatSprite(50,200,50,50);
  wall=createSprite(1500,200,60,hight/2);
  wall=createSprite(1200,200, thickness, hight/2)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
speed=random (55,90);
weight=random(400,1500);
thickness=random(22,83);
speed=random(223,321);
weight=random(30,52)
car.velocityX=speed;
