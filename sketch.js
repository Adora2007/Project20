var car, wall;
var speed, weight;





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);

  //creating the car
  car= createSprite(50,200,50,50);
  car.velocityX= speed;

  //creating the wall
  wall=createSprite(1500,20,60, height/2);
  wall.shapeColor(80,80,80);

}

function draw() {
  background(255,255,255);  

  
  deformation= (0.58*weight*speed*speed)/(22500);
   
  if(deformation > 100){
    car.shapeColor(0.255,0);
  } 

  if(deforamtion > 180){
    car.shapeColor(230,230,0);
  }

  if(deformation < 180){
    car.shapeColor(255,0,0);
  }
  drawSprites();
}