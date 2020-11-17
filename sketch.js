const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2;
var ground;
function setup() {
  createCanvas(800,400);  
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(100,75,40,40);
  box2 = new Box(200,75,40,40);
  ground = new Ground(200,390,400,20);

/*   var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,100,50,50,ground_options)
  World.add(world,ground);
  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(300,200,10,ball_options);
  World.add(world,ball);
  createSprite(400, 200, 50, 50); */
} 

function draw() {
  background("black");  
  box1.display();
  box2.display();
  ground.display();
  /* ellipseMode(RADIUS);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,50,50);
  ellipse(ball.position.x,ball.position.y,20,20); 
  drawSprites(); */
}