class Dustbin
{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic:true,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        width = width;
        height = height;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
};