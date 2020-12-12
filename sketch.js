var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
 

  bullet=createSprite(50, 200, 150, 20);
  bullet.velocityX = speed;
  bullet.shapeColor="white"

  thickness=random(22,83);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);


}

function draw() {
  background(0); 

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/(thickness*thickness*thickness);
    console.log(deformation);
    if(deformation>10)
    {
      wall.shapeColor="red";
    }

  if(deformation<10)
  {
    wall.shapeColor="green";
  }
  }
  drawSprites();
}