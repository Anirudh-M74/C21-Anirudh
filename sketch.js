const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var myengine, ground, ball, world

function setup() {
  createCanvas(400,400);
  myengine= Engine.create()
  world= myengine.world
  ground= Bodies.rectangle(200,380,800,50,{isStatic: true})
World.add(world,ground)
ball=Bodies.circle(200,100,10,{restitution:1})
World.add(world,ball)
}
function draw() {
  background("black")
  Engine.update(myengine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
  circle(ball.position.x,ball.position.y,50)
}