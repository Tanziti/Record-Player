import Record from "./scripts/record.js";
import Song from "./scripts/song.js";

document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello world!");

    let canvas = document.getElementById("record_player")
    let context = canvas.getContext("2d");
    debugger
    canvas.style.background = "#818589";
     
    context.translate(125,150)
    
let record = new Record();
record.draw(context);
function animate(){
  if (isPlaying) {
    context.clearRect( -125, -150, canvas.width, canvas.height);
    record.update(context);
    record.draw(context);
    requestAnimationFrame(animate);
  } 
}
// requestAnimationFrame(animate);
function resetAnime(){
    context.resetTransform();
    context.translate(125,150);
    record.draw(context);
   if (!isPlaying){
    isPlaying = true;
    animate();
   }
}   


const songUrl = 'https://spotify-web2.p.rapidapi.com/playlist_tracks/?id=6HV2lBp82zscNRlHrwAZ9G&offset=0&limit=100';
const song = new Song(songUrl);

// const audioCtx = new AudioContext();
// console.log(audioCtx);



let isPlaying = false;


// make audio element 
// set the audio element src
const audio = document.getElementById('audio_player')

async function getSong(){
    audio.src = await song.getAudio();
}
getSong();
const button1 = document.getElementById('button1');
button1.addEventListener('click', async function(){
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
    // fix?
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

   

const button2 = document.getElementById('button2');
button2.addEventListener('click', async function(){
    audio.src = await song.nextSong();
    playbackSpeed.value = 100;
    isPlaying = true;
    resetAnime();
    debugger
    audio.play();
   console.log('next song')
});
const volume_slider = document.getElementById("volume");


volume_slider.addEventListener('input', function(){
    let audioVol = volume_slider.value / 100;
    audio.volume = audioVol;
} )
const playbackSpeed = document.getElementById('playback')
playbackSpeed.addEventListener('input', function(){
    let audioSpeed = playbackSpeed.value / 100;
    audio.playbackRate = audioSpeed;
} )

});
