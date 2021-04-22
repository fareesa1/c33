class Bob{
    constructor(x,y,r){
        var op= {
        desnsity:1.0
        }

        this.body = Matter.Bodies.circle(x,y,r,op)
        Matter.World.add(world,this.body)
        this.r = r

    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        ellipseMode(CENTER)
        translate(pos.x,pos.y)
        rotate(angle)
        ellipse(0,0,this.r*2)
        pop()
    }
}