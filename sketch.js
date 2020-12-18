var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
 
  speed=random(55,90)
  weight = random(400,1500)

 thickness = random(22,83)
speed = random(223,321)
weight = random (30,52)


  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)

bullet = createSprite(50,200, 30, 20)
bullet.velocityX = speed
}

function draw() {

  background(0);  

if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{

bullet.velocityX = 0;

wall.shapeColor = color (0,255,0)
}
drawSprites();

}



