import Record from "./scripts/record.js";
import Song from "./scripts/song.js";

document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello world!");

    let canvas = document.getElementById("record_player")
    let context = canvas.getContext("2d");

    canvas.style.background = "#ff8";
     
    context.translate(100,100)
    
const record = new Record();
record.draw(context);
function animate(){
    if (isPlaying){
    context.clearRect( 0, 0, canvas.width, canvas.height);
    record.update(context);
    record.draw(context);
    requestAnimationFrame(animate);
    } 
}
// requestAnimationFrame(animate);



const songUrl = 'https://spotify-web2.p.rapidapi.com/playlist_tracks/?id=6HV2lBp82zscNRlHrwAZ9G&offset=0&limit=100';
const song = new Song(songUrl);

// const audioCtx = new AudioContext();
// console.log(audioCtx);



// let song1 = new Audio();
var isPlaying = false;


// make audio element 
// set the audio element src
const audio = document.getElementById('audio_player')

async function getSong(){
    audio.src = await song.getAudio();
}
getSong();
const button1 = document.getElementById('button1');
button1.addEventListener('click', function(){
    // audio.src = await song.getAudio();

    console.log('click');
    
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
      
        animate();
    } else { 
        audio.pause();
        console.log('music paused')
      
        isPlaying = false;
    }
       
    audio.addEventListener('playing', function(){
        console.log('audio started playing');
    });
    audio.addEventListener('paused', function(){
        console.log('Audio 1 ended')
        isPlaying = false;
    
    });
})
const mute = document.getElementById('mute')
mute.addEventListener('click',() =>{

    if (audio.muted === true){
        audio.muted = false;
        console.log("audio unmuted")
    } else {
        audio.muted = true;
        console.log("audio muted")
    };
    
    })

    // //// NEXT STEPS: MAKE A PLAYLIST OF SONGS AND LEARN HOW TO SWITCH SONGS

const button2 = document.getElementById('button2');
button2.addEventListener('click', async function(){
    audio.src = await song.nextSong();
    debugger
    audio.play();
    animate();
    isPlaying = true;
});

 });
