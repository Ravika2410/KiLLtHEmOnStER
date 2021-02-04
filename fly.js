class fly
{
    constructor(a,b)
    {
        this.thread=Matter.Constraint.create(
          {
            pointA:a,
            bodyB:b,
            stiffness:0.5,
            length:150
          }
        );

       this.pointA=a;
       this.bodyB=b;
       World.add(myWorld,this.thread);

    }

    display()
    {
        strokeWeight(4);
        stroke(74, 35, 90 );
        var a=this.pointA;
        var b=this.bodyB.position;
        line(a.x,a.y,b.x,b.y);
    }
}