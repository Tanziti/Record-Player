export default class Song {
  constructor(url) {
      this.url = url;
      this.audioContext = null;
      this.source = null;
      this.muted = false;
  }

  async fetchSongData() {
    const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=24pXGqFW7Ep5wbT9caFKYz';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '511fdf43ebmsh7a179f82558f1b5p145ef3jsn80b50bfe3a92',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
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
     return  songData.tracks[0].preview_url;
  }


}