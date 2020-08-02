const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var center,side1,side2;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(850,850);
    
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
    center = new Ground (685,850,285,10);
    side1 = new Ground (545,793,10,125);
    side2 = new Ground (825,793,10,125);
    ground = new Ground (400,850,900,5);
    ball = new Paper (200,770, PI/3);
    
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  center.display();
  side1.display();
  side2.display();
  ground.display();
  ball.display();
  
  drawSprites();
  console.log(ball.body.position);
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0.15,y:-0.15})
  }
}

