class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      var options = {
        bodyA: polygon,
        bodyB: ground,
        stiffness: 0.04,
        length: 3
     }
      this.pointB = ground;
    }

    display(){
      this.body.visible = true;

      if(this.body.velocityX < 3){

        this.body.visible = true;

      }

      if(this.ground.bodyA)[
        var pointA = this.ground.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        SVGPathSegLinetoAbs(pointA.x, pointA.y, pointB.x, pointB.y);
      ]
    }
  
  };
  