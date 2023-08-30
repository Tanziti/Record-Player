
export default class Record {
  constructor(){
    
  }

  draw(context) {
      context.save();
      context.beginPath(); 
      context.strokeStyle = "white";
      context.fillStyle = "#080402";
      context.lineWidth = 2;
      context.arc(0, 0, 60, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 15, 0, 2 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 2.5, 0, 2 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 25, 1.6 * Math.PI, 2 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 35, 1.6 * Math.PI, 2 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 45, 1.6 * Math.PI, 2 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 25, .60 * Math.PI, 1 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 35, .60 * Math.PI, 1 * Math.PI);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.arc(0, 0, 45, .60 * Math.PI, 1 * Math.PI);
      context.stroke();
      context.closePath();
      context.restore();
  }

  update(context) {
    context.rotate(1 * Math.PI/360)
  }
  update1(context){
    context.rotate(-1 * Math.PI/360)
  }
}
