class hero
{
    constructor(x,y)
    {
        
    this.ing=loadImage("Superhero-01.png");
       
        var property={
            density:1,
            frictionAir:1
           
        }
        this.width=400;
        this.height=20;
        this.body=Bodies.rectangle(x,y,this.width,this.height,property);
        World.add(myWorld,this.body);

    }

    display()
    {

        push();
        imageMode(CENTER);
        image(this.ing,this.body.position.x,this.body.position.y,400,150);  
        pop();

      /*  rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);*/
    }
}