const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  myengine = Engine.create();
  //myworld is myengine's world
  myworld = myengine.world;

  var options = {
    isStatic : true
  }
ground = Bodies.rectangle(400, 390, 800, 20,options);
World.add(myworld,ground);
var balloption = {
  restitution:0.999
}
ball= Bodies.circle(400,200,20,balloption);
World.add(myworld,ball);
  Engine.run(myengine);
  console.log(ball);
}

function draw() {
  background(255,255,255);  

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipse(ball.position.x,ball.position.y,40,40)
  //drawSprites();
}