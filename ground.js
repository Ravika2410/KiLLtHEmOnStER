class ground
{
    constructor(x,y,w,h)
    {
        var property={
            isStatic:true,
            restitution:0
        }
        this.width=w;
        this.height=h;
        this.body=Bodies.rectangle(x,y,w,h,property);
        World.add(myWorld,this.body);

    }

    display()
    {
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}