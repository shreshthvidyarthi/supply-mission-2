class box{
    constructor(x,y,width,height){
        var Options={
            restitution:0.7
        }
     this.body = Bodies.rectangle(x,y,width,height,Options)
this.width=width;
this.height=height;
     World.add(world,this.body)
}
display(){
    push()
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    rect(0 , 0,this.width,this.height);
    pop();
}
}
