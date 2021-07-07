class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Vanishing = 255;
  }
display()
{
if(this.body.speed<3){
  super.display();

}
else{
  

  World.remove(world, this.body);
push();
  this.Vanishing = this.Vanishing - 5;
  tint (255,this.Vanishing);
  image(this.image, this.body.position.x,this.body.position.y,50,50)
  pop();
}



}};
