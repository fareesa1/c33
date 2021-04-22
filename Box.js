class Box{
    constructor(x,y,w,h){
        var op = {
            friction:1.0
        }
       this.body = Matter.Bodies.rectangle(x,y,w,h,op)
       Matter.World.add(world, this.body)
       this.w = w;
       this.h = h
    }

    render(){
       var angle = this.body.angle;
      var  pos = this.body.position;
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rect(0,0,this.w,this.h)
        pop()
    }

}