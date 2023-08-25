const { async } = require("regenerator-runtime");


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

const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=4hObp5bmIJ3PP3cKA9K9GY';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '511fdf43ebmsh7a179f82558f1b5p145ef3jsn80b50bfe3a92',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
let audioContext = null;
let source = null;

async function fetchSongData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

async function toggleAudio() {
    if (!audioContext) {
        const songData = await fetchSongData();

        if (songData && songData.tracks.length > 0) {
            const audioUrl = songData.tracks[0].preview_url;

            if (audioUrl) {
                // Create the AudioContext after a user gesture
                audioContext = new AudioContext();

                // Load and play the audio in response to user gesture
                const audioBuffer = await fetch(audioUrl)
                    .then(response => response.arrayBuffer())
                    .then(data => audioContext.decodeAudioData(data));

                source = audioContext.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(audioContext.destination);
                source.start();
            } else {
                console.log('No preview URL available for audio');
            }
        } else {
            console.log('No song data found');
        }
    } else {
        // Stop audio playback
        source.stop();
        audioContext.close();
        audioContext = null;
        source = null;
    }
}

// Call toggleAudio in response to a user gesture, like a button click
const playButton = document.getElementById('playButton');
playButton.addEventListener('click', toggleAudio);
// let play = document.getElementsByClassName("btn");
// function playMusic(){
//     let audio = new Audio(url);
//     audio.play();
// }

// context.addEventListener("click", playMusic());

});