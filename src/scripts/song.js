export default class Song {
  constructor(url) {
      this.url = url;
      this.audioContext = null;
      this.source = null;
      this.muted = false;
      this.songIndex = 0;
  }

 
    // const clientId = '1d4bf99c88854b4f91c4f6c5013ed995';
    // const clientSecret = '91954bbad64a4d36a485953d1bf5e801';
    // debugger
    // const result = await fetch('https://accounts.spotify.com/api/token', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type' : 'application/x-www-form-urlencoded',
    //     'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
    //   },
    //   body: 'grant_type=client_credentials'
    // });
    //   const data = await result.json();
    //   debugger
    //   console.log(data.access_token);
    //   let token = data.access_token;


    async fetchSongData() {
      const url = 'https://spotify-web2.p.rapidapi.com/playlist_tracks/?id=6HV2lBp82zscNRlHrwAZ9G&offset=0&limit=100';
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'd2fe1d3f6dmsh1490e167b6701eep1fde0ejsnefe0222631a8',
              'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
          }
      };
      
      try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          return result
      } catch (error) {
          console.error(error);
      }
    }
    
  async getAudio(){
    let songData = await this.fetchSongData();
    console.log('song retrieved');
     return  songData.items[this.songIndex].track.preview_url;

  }
 async nextSong(){
  let songData = await this.fetchSongData();
  this.songIndex = (this.songIndex + 1) % songData.items.length;
  console.log("song data")
  console.log(this.songIndex);
  return songData.items[this.songIndex].track.preview_url;
  }
  async prevSong(){
    let songData = await this.fetchSongData();
    if (this.songIndex === 0){
      this.songIndex = songData.items.length ;
     
    }
  this.songIndex = (this.songIndex - 1) % songData.items.length;

  console.log("song data")
  console.log(this.songIndex);
  return songData.items[this.songIndex].track.preview_url;
    //create
  }
}