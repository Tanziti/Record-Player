export default class Song {
  constructor(url) {
      this.url = url;
      this.audioContext = null;
      this.source = null;
      this.muted = false;
  }

  async fetchSongData() {
      try {
          const response = await fetch(this.url, {
              method: 'GET',
              headers: {
                  'X-RapidAPI-Key': '511fdf43ebmsh7a179f82558f1b5p145ef3jsn80b50bfe3a92',
                  'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
              }
          });

          const result = await response.json();
          return result;
      } catch (error) {
          console.error(error);
      }
  }

  async getAudio() {
    // Check if the AudioContext is not already initialized
    if (!this.audioContext) {
        // Fetch song data using the fetchSongData method
        const songData = await this.fetchSongData();

        // Check if song data was retrieved
        if (songData) {
            // Get the audio URL from the song data
            const audioUrl = songData.tracks[0].preview_url;

            // Check if there is an audio URL
            if (audioUrl) {
                // Create a new AudioContext
                this.audioContext = new AudioContext();

                // Fetch the audio data and decode it into an audio buffer
                const audioBuffer = await fetch(audioUrl)
                    .then(response => response.arrayBuffer())
                    .then(data => this.audioContext.decodeAudioData(data));

                // Create a BufferSource node and connect it to the destination
                this.source = this.audioContext.createBufferSource();
                this.source.buffer = audioBuffer;
                this.source.connect(this.audioContext.destination);
                
                // Create a GainNode and connect the source to it
                this.source.gainNode = this.audioContext.createGain();
                this.source.connect(this.source.gainNode);
                this.source.gainNode.connect(this.audioContext.destination);
                
                // Start playing the audio
                this.source.start();
            } else {
                console.log('No preview URL available for audio');
            }
        } else {
            console.log('No song data found');
        }
    } else {
        // Stop the audio and clean up
        this.source.stop();
        this.audioContext.close();
        this.audioContext = null;
        this.source = null;
    }
}

  toggleAudio() {
    console.log('Before toggle - Gain:', this.source.gainNode.gain.value);
    if (!this.muted) {
        // Store the current gain value before muting
        this.source.gainNode.prevGain = this.source.gainNode.gain.value;

        // Mute the audio (set volume to 0)
        this.source.gainNode.gain.value = 0;
        this.muted = true;
    } else {
        // Unmute the audio (restore volume to previous value)
        this.source.gainNode.gain.value = this.source.gainNode.prevGain || 1;
        this.muted = false;
    }
}

}