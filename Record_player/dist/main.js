!function(){"use strict";!function(){class e{constructor(){}draw(e){e.save(),e.beginPath(),e.strokeStyle="white",e.fillStyle="#080402",e.lineWidth=2,e.arc(0,0,60,0,2*Math.PI),e.stroke(),e.fill(),e.closePath(),e.beginPath(),e.arc(0,0,15,0,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(0,0,2.5,0,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(0,0,25,1.6*Math.PI,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(0,0,35,1.6*Math.PI,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(0,0,45,1.6*Math.PI,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(0,0,25,.6*Math.PI,1*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(0,0,35,.6*Math.PI,1*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(0,0,45,.6*Math.PI,1*Math.PI),e.stroke(),e.closePath(),e.restore()}update(e){e.rotate(1*Math.PI/360)}update1(e){e.rotate(-1*Math.PI/360)}}class t{constructor(e){this.url=e,this.audioContext=null,this.source=null,this.muted=!1,this.songIndex=0}async fetchSongData(){const e={method:"GET",headers:{"X-RapidAPI-Key":"d2fe1d3f6dmsh1490e167b6701eep1fde0ejsnefe0222631a8","X-RapidAPI-Host":"spotify81.p.rapidapi.com"}};try{const t=await fetch("https://spotify-web2.p.rapidapi.com/playlist_tracks/?id=6HV2lBp82zscNRlHrwAZ9G&offset=0&limit=100",e),s=await t.json();return console.log(s),s}catch(e){console.error(e)}}async getAudio(){let e=await this.fetchSongData();return console.log("song retrieved"),e.items[this.songIndex].track.preview_url}async nextSong(){let e=await this.fetchSongData();return this.songIndex=(this.songIndex+1)%e.items.length,console.log("song data"),console.log(this.songIndex),e.items[this.songIndex].track.preview_url}async prevSong(){let e=await this.fetchSongData();return 0===this.songIndex&&(this.songIndex=e.items.length),this.songIndex=(this.songIndex-1)%e.items.length,console.log("song data"),console.log(this.songIndex),e.items[this.songIndex].track.preview_url}}document.addEventListener("DOMContentLoaded",(function(){console.log("Hello world!");let s=document.getElementById("record_player"),a=s.getContext("2d");a.translate(100,75),s.style.background="#8185897a";let o=new e;function n(){c&&(a.clearRect(-100,-75,s.width,s.height),o.update(a),o.draw(a),requestAnimationFrame(n))}function l(){a.resetTransform(),a.translate(100,75),o.draw(a),c||(c=!0),n()}o.draw(a);const i=new t("https://spotify-web2.p.rapidapi.com/playlist_tracks/?id=6HV2lBp82zscNRlHrwAZ9G&offset=0&limit=100");let c=!1;const d=document.getElementById("audio_player");!async function(){d.src=await i.getAudio()}();let r=document.querySelector(".tone-arm");document.getElementById("button1").addEventListener("click",(function(){console.log("click"),c?(d.pause(),r.classList.remove("play"),console.log("music paused"),c=!1):(r.classList.add("play"),setTimeout((()=>{d.play(),n()}),1e3),c=!0),d.addEventListener("playing",(function(){console.log("audio started playing")}))})),d.addEventListener("ended",(function(){console.log("Audio 1 ended"),c=!1,r.classList.remove("play")})),document.getElementById("mute").addEventListener("click",(()=>{!0===d.muted?(r.classList.add("play"),setTimeout((()=>{d.muted=!1}),700),console.log("audio unmuted")):(r.classList.remove("play"),d.muted=!0,console.log("audio muted"))})),document.getElementById("button2").addEventListener("click",(async function(){d.src=await i.nextSong(),p.value=100,c=!0,setTimeout((()=>{l()}),750),r.classList.remove("play"),setTimeout((()=>{r.classList.add("play"),setTimeout((()=>{d.play()}),1e3)}),1e3),console.log("next song")})),document.getElementById("prevSong").addEventListener("click",(async function(){d.src=await i.prevSong(),p.value=100,c=!0,setTimeout((()=>{l()}),750),r.classList.remove("play"),setTimeout((()=>{r.classList.add("play"),setTimeout((()=>{d.play()}),1e3)}),1e3),console.log("prev song")}));let u=document.getElementById("record1");u.addEventListener("mouseover",(function(){u.classList.add("on"),setTimeout((()=>{u.classList.remove("on")}),1e4)})),u.addEventListener("click",(async function(){document.body.style.backgroundImage="url('./src/red_yellow.jpg')";let e=await i.fetchSongData();d.src=e.items[9].track.preview_url,p.value=100,setTimeout((()=>{l()}),750),r.classList.remove("play"),setTimeout((()=>{r.classList.add("play"),setTimeout((()=>{d.play()}),1e3)}),1e3)}));let m=document.getElementById("record2");m.addEventListener("mouseover",(function(){m.classList.add("on"),setTimeout((()=>{m.classList.remove("on")}),1e4)})),m.addEventListener("click",(async function(){document.body.style.backgroundImage="url('./src/blue.jpg')";let e=await i.fetchSongData();d.src=e.items[14].track.preview_url,p.value=100,c=!0,setTimeout((()=>{l()}),750),r.classList.remove("play"),setTimeout((()=>{r.classList.add("play"),setTimeout((()=>{d.play()}),1e3)}),1e3)}));let g=document.getElementById("record3");g.addEventListener("mouseover",(function(){g.classList.add("on"),setTimeout((()=>{g.classList.remove("on")}),1e4)})),g.addEventListener("click",(async function(){document.body.style.backgroundImage="url('./src/green.jpg')";let e=await i.fetchSongData();d.src=e.items[19].track.preview_url,p.value=100,c=!0,setTimeout((()=>{l()}),750),r.classList.remove("play"),setTimeout((()=>{r.classList.add("play"),setTimeout((()=>{d.play()}),1e3)}),1e3)}));const h=document.getElementById("volume");h.addEventListener("input",(function(){let e=h.value/100;d.volume=e}));const p=document.getElementById("playback");p.addEventListener("input",(function(){let e=p.value/100;d.playbackRate=e}))}))}()}();
//# sourceMappingURL=main.js.map