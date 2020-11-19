class Paper{
    constructor(x, y, r){
        var options={
            isStatic: false,
            friction: 1,
            restitution: 0.1,
            density: 15
        }
    
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(x, y, r/2, options);
    this.x = x;
    this.y = y;
    this.r = r;

    World.add(world, this.body);
    } 
    
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image,0,0,this.r,this.r);
        pop();
        

    }
}