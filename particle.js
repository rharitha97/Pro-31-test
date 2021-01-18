class Particle {
  constructor(x, y,r) {

      var options ={
          restitution:0.4
      }
      this.r=r;
    
      this.body = Bodies.circle(x, y, this.r,options);       
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);

  }
  display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //imageMode(CENTER);
      noStroke();
      fill(this.color)
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r,this.r);
      pop();
  }

};
/*Particles will be moving so the points translate and the
rotation of the objects too happen so we do give the translate and rotate
functions*/



/*class Particle {
    constructor(x,y) {
      this.body = Bodies.circle(x,y,radius,options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      circle(pos.x, pos.y, this.radius);
    }
  }*/
