class Box{
    constructor(x,y,width,height){
        var options = {
            'restitiution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.image= loadImage("block.png")
    }
    display(){
        var pos = this.body.position;
        if(this.body.speed > 3){             
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);   
            
            pop()         
            
        }
        else{
            image(this.image,pos.x,pos.y, 20, 30);
        }
          
        }
    
    
}