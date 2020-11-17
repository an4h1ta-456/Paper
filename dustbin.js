class Dustbin{
        constructor(x, y) {
  
          this.body1 = Bodies.rectangle(x-80, y-60, 20, 100, {isStatic: true});
          this.body2 = Bodies.rectangle(x, y, 180, 20, {isStatic: true});
          this.body3 = Bodies.rectangle(x+80, y-60, 20, 100, {isStatic: true});
          
          World.add(world, this.body1);
          World.add(world, this.body2);
          World.add(world, this.body3);

          this.image = loadImage("dustbingreen.png");
        }
        display(){
          var pos1 =this.body1.position;
          var pos2 =this.body2.position;
          var pos3 =this.body3.position;
          push();
          translate(pos1.x, pos1.y);
          fill("grey");
          rect(0, 0, 20, 100);
          pop();
          
          push();
          translate(pos2.x, pos2.y);
          fill("grey");
          rect(0, 0, 180, 20);
          pop();
          
          push();
          translate(pos3.x, pos3.y);
          fill("grey");
          rect(0, 0, 20, 100);
          pop();
        }
      };
      