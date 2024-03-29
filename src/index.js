import Record from "./scripts/record.js";
import Song from "./scripts/song.js";

document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello world!");
    
    let canvas = document.getElementById("record_player")
    let context = canvas.getContext("2d"); 
    context.translate(100,75)
    canvas.style.background = "#8185897a";

let record = new Record();
record.draw(context);
function animate(){
  if (isPlaying) {
    context.clearRect( -100, -75, canvas.width, canvas.height);
    record.update(context);
    record.draw(context);
    requestAnimationFrame(animate);
  } 
}
function resetAnime(){
    context.resetTransform();
    context.translate(100,75);
    record.draw(context);
   if (!isPlaying){
    isPlaying = true;
    animate();
   } else{
    animate();
   }
}   

const songUrl = 'https://spotify-web2.p.rapidapi.com/playlist_tracks/?id=6HV2lBp82zscNRlHrwAZ9G&offset=0&limit=100';
const song = new Song(songUrl);

let isPlaying = false;

const audio = document.getElementById('audio_player')
audio.volume = .25;
async function getSong(){
    audio.src = await song.getAudio();
}
getSong();


let toneArm = document.querySelector(".tone-arm");
const button1 = document.getElementById('button1');
button1.addEventListener('click', function(){
    console.log('click');
    
    if (!isPlaying) {
        if (!audio.muted) {
            toneArm.classList.add("play");
        }
        setTimeout( () => {
        audio.play(); 
        animate();
        }, 1000)
        isPlaying = true;
    } else { 
        audio.pause();
        toneArm.classList.remove("play");
        console.log('music paused')
        isPlaying = false;
    }
       
    audio.addEventListener('playing', function(){
        console.log('audio started playing');
    });
  
})
audio.addEventListener('ended', function(){
    console.log('Audio 1 ended')
    isPlaying = false;
    toneArm.classList.remove("play")
// fix?
});
const mute = document.getElementById('mute')
mute.addEventListener('click',() =>{

    if (audio.muted === true){
        mute.innerText = 'Mute';
        toneArm.classList.add("play")
        setTimeout(() =>{
        audio.muted = false;
        }, 700)
        
        console.log("audio unmuted")
    } else {
         mute.innerText = "UnMute"   
         toneArm.classList.remove("play");
        audio.muted = true;
        console.log("audio muted")
    };
   
    })

   

const nextSong = document.getElementById('button2');
nextSong.addEventListener('click', async function(){
    audio.src = await song.nextSong();
    if (!audio.muted) {
        toneArm.classList.add("play");
    }
    record1.classList.remove("on");
    record2.classList.remove("on");
    record3.classList.remove("on");
    playbackSpeed.value = 100;
    isPlaying = true;
    setTimeout(()=>{
        resetAnime();
    }, 750)
    toneArm.classList.remove('play');
    setTimeout(()=>{
    toneArm.classList.add("play");
    setTimeout(() => {
         audio.play();
    }, 1000)
}, 1000)
   console.log('next song')
});
const prevSong = document.getElementById('prevSong')
prevSong.addEventListener('click', async function(){
    audio.src = await song.prevSong();
    if (!audio.muted) {
        toneArm.classList.add("play");
    }
    record1.classList.remove("on");
    record2.classList.remove("on");
    record3.classList.remove("on");
    playbackSpeed.value = 100;
    isPlaying = true;
    setTimeout(()=>{
        resetAnime();
    }, 750)
    toneArm.classList.remove('play');
    setTimeout(()=>{
    toneArm.classList.add("play");
    setTimeout(() => {
         audio.play();
    }, 1000)
}, 1000)
   console.log('prev song')
})

let record1 = document.getElementById('record1');

   record1.addEventListener('mouseleave', function(){
    record1.classList.remove("on")
   })
   record1.addEventListener('click', async function(){
       let select = await song.fetchSongData();
       if (!audio.muted) {
        toneArm.classList.add("play");
    }
       record3.classList.remove("on");
       record2.classList.remove("on");
       record1.classList.add("on");
       document.body.style.backgroundImage = "url('./src/red_yellow.jpg')";
        audio.src = select.items[9].track.preview_url;
        playbackSpeed.value = 100;
        setTimeout(()=>{
            resetAnime();
        }, 750)
        toneArm.classList.remove('play');
        setTimeout(()=>{
        toneArm.classList.add("play");
        setTimeout(() => {
             audio.play();
        }, 1000)
    }, 1000)
    })
    let record2 = document.getElementById('record2');
    record2.addEventListener('click', async function(){
        if (!audio.muted) {
            toneArm.classList.add("play");
        }
        record3.classList.remove("on");
        record1.classList.remove("on");
        record2.classList.add("on");
        document.body.style.backgroundImage = "url('./src/blue.jpg')";
        let select = await song.fetchSongData();
        audio.src = select.items[14].track.preview_url;
        playbackSpeed.value = 100;
        isPlaying = true;
        setTimeout(()=>{
            resetAnime();
        }, 750)
        toneArm.classList.remove('play');
        setTimeout(()=>{
        toneArm.classList.add("play");
        setTimeout(() => {
             audio.play();
        }, 1000)
    }, 1000)
    })
    let record3 = document.getElementById('record3');

    record3.addEventListener('click', async function(){
     
        let select = await song.fetchSongData();
        record1.classList.remove("on");
        record2.classList.remove("on");
        record3.classList.add("on");
        document.body.style.backgroundImage = "url('./src/green.jpg')";
        audio.src = select.items[19].track.preview_url;
        playbackSpeed.value = 100;
        isPlaying = true;
        setTimeout(()=>{
            resetAnime();
        }, 750)
        
        toneArm.classList.remove('play');
        setTimeout(()=>{
            if (!audio.muted){
          toneArm.classList.add("play");
        }
        setTimeout(() => {
             audio.play();
        }, 1000)
    }, 1000)
    })
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

let arm = document.getElementById('control')
arm.addEventListener('click', ()=>{
    if (!isPlaying) {
        toneArm.classList.add("play");
        setTimeout( () => {
        audio.play(); 
        animate();
        }, 1000)
        isPlaying = true;
    } else { 
        audio.pause();
        toneArm.classList.remove("play");
        console.log('music paused')
        isPlaying = false;
    }
})

});
