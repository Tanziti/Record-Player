
export default class Record {
  constructor(){
    
  }

  draw(context) {
      // context.save();
      context.beginPath();
      context.strokeStyle = "white";
      context.arc(0, 0, 100, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 20, 0, 2 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 5, 0, 2 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 40 , 1.6 * Math.PI, 2 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 50, 1.6 * Math.PI, 2 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 60, 1.6 * Math.PI, 2 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 40, .60 * Math.PI, 1 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 50, .60 * Math.PI, 1 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 60, .60 * Math.PI, 1 * Math.PI);
      context.stroke();
      context.closePath();
      // context.restore();
  }

  update(context) {
    context.rotate(1 * Math.PI/360)
  }
}
