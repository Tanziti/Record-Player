
export default class Needle{
  constructor(){
    this.angle = 0;
  }
  draw(context){
    context.save();
    context.fillStyle = "white";
    context.fillRect(75,-50,10,50);
    context.restore();
  }
  draw1(context){
    context.save();
    context.fillStyle = "white";
    context.fillRect(0 + this.angle,0,10,50);
    context.restore();
  }
   
  update(context) {
    context.rotate(1 * Math.PI/360)
    this.angle += 1
  }
}