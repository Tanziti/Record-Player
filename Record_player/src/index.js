

document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello world!");


    let canvas = document.getElementById("record_player")
    let context = canvas.getContext("2d");
    // let windew_height = window.innerHeight;
    // let window_width = window.innerWidth;

    // canvas.width = window_width;
    // canvas.height = windew_height;
    canvas.style.background = "#ff8";
     
    context.translate(100,100)
    
    class Record {
        constructor(){
        
        }
   

    draw(){
    context.save();
    context.beginPath();
    context.arc(0, 0, 100, 0, 2 * Math.PI);
    context.fill();
    context.arc(0, 0, 20, 0, 2*Math.PI)
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
    
    context.restore();
    };
  
    update(){
      context.rotate(1 * Math.PI/360)
    }
 };
const record = new Record();

function animate(){
    context.clearRect( 0, 0, canvas.width, canvas.height);
    record.update();
    record.draw();
    requestAnimationFrame(animate);
}

animate();

let play = document.getElementsByClassName("btn");
function playMusic(){
    let audio = new Audio("");
    audio.play();

}

});