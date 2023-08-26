
export default class Record {
  constructor(){
    
  }

  draw(context) {
      context.save();
      context.beginPath();
      context.arc(0, 0, 100, 0, 2 * Math.PI);
      context.fill();
      context.arc(0, 0, 20, 0, 2 * Math.PI);
      context.strokeStyle = "white";
      context.stroke();
      context.closePath();
      context.restore();
  }

  update(context) {
    context.rotate(1 * Math.PI/360)
  }
}
