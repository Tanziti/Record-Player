export default class Song {
  constructor(url) {
      this.url = url;
      this.audioContext = null;
      this.source = null;
      this.muted = false;
      this.songIndex = 0;
  }

  async fetchSongData() {
    const url = 'https://spotify-web2.p.rapidapi.com/playlist_tracks/?id=6HV2lBp82zscNRlHrwAZ9G&offset=0&limit=100';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '511fdf43ebmsh7a179f82558f1b5p145ef3jsn80b50bfe3a92',
            'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
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
    debugger
    console.log('song retrieved');
     return  songData.items[this.songIndex].track.preview_url;

  }
 async nextSong(){
  let songData = await this.fetchSongData();
  this.songIndex = (this.songIndex + 1) % songData.items.length;
  console.log("song data")
  console.log(this.songIndex);
  return songData.items[this.songIndex].track.preview_url;


  // let currentSong = await this.getAudio();
  //   debugger
  //   let i = 0
  //   while(i < songData.items.length){
  //     debugger
  //     if (currentSong === songData.items[i].track.preview_url){
  //       return songData.items[i].track.preview_url;
  //       debugger
  //     }else {
  //     return songData.items[i].track.preview_url;
  //     }
  //   }
  }
  prevSong(){
    
  }
}