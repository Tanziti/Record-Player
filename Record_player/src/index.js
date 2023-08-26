const { async } = require("regenerator-runtime");
import Record from "./scripts/record.js";
import Song from "./scripts/song.js";

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
    
const record = new Record();

function animate(){
    context.clearRect( 0, 0, canvas.width, canvas.height);
    record.update(context);
    record.draw(context);
    requestAnimationFrame(animate);
}

animate();



const songUrl = 'https://spotify23.p.rapidapi.com/tracks/?ids=4hObp5bmIJ3PP3cKA9K9GY';
const song = new Song(songUrl);

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => song.getAudio());
const muted = document.getElementById('mute');
muted.addEventListener('click', () => song.toggleAudio());
// const gainNode = this.audioContext.createGain();

// const volumeControl = document.querySelector('[data-action="volume"]');
// volumeControl.addEventListener('input', function() {
// 	gainNode.gain.value = this.value;
// }, false);

 });
