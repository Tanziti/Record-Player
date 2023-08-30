export default class Circle {
  constructor(xpoint, ypoint, radius, color){
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.radius = radius;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI *2, false);
    context.stroke();
    context.closePath();
  }
  clickCircle(xmouse, ymouse) {
    const distance = Math.sqrt( (xmouse - this.xpoint) * ( xmouse - this.xpoint ) ) + 
    ( (ymouse - this.ypoint ) * ( ymouse - this.ypoint ) )
    console.log(distance);
 };
}