class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    this.Visibilty = 255; 
  }

  display(){

    if (this.body.speed<4){
      super.display();
    }

    else{
      World.remove(world,this.body);
      push();
      this.Visibilty=this.Visibilty-5;
      tint(255,this.Visibilty);
      pop();
    }
  }


  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }


};
