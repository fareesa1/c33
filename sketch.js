var box1,box2,box3,ball, ground, engine, world;

function setup(){
  createCanvas(1000,600)
  
  engine = Matter.Engine.create()
  world = engine.world
  
  
  var options={isStatic:true}
  ground=Matter.Bodies.rectangle(500,590,1000,20,options)
  Matter.World.add(world,ground)
  

  b1 = new Box(65kk0,550,80,80)

  bob = new Bob(200,500,60);

  op = {
    bodyA: bob.bo
  }
  Matter.Constraint.create()
}

function draw(){
  background("lavender")
  Matter.Engine.update(engine)
  rectMode(CENTER)
  noStroke()
  
  
  fill ("black")
  rect(ground.position.x,ground.position.y,1000,20)
  

  b1.render()
  bob.display()
}