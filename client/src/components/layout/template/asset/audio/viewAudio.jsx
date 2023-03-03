import React, { useState, useEffect } from 'react';
import Amplitude from 'amplitudejs';
import CSS from "../../../../../css/assets/Audio.scss"


function ViewAudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const [songs, setSongs] = useState([
    {
      name: "The Only Thing They Fear Is You",
      artist: "Mick Gordon",
      url: "http://localhost:3000/uploads/xln/asset/audio/doom_1.mp3",
      cover_art_url: "http://localhost:3000/uploads/xln/asset/images/doom_ost.jpg"
    },
    {
      name: "Scavenger Hunt",
      artist: "P.T. Adamczyk",
      url: "http://localhost:3000/uploads/xln/asset/audio/scavenger_hunt.mp3",
      cover_art_url: "http://localhost:3000/uploads/xln/asset/images/cyberpunk_2077_ost.jpg"
    },
    {
      name: "ASSAULT WAVES",
      artist: "強襲揚陸波",
      url: "http://localhost:3000/uploads/xln/asset/audio/assault_waves.mp3",
      cover_art_url: "http://localhost:3000/uploads/xln/asset/images/stardust_memory_ost.jpeg"
    },
    {
      name: "Bindy",
      artist: "Seatbelts",
      url: "http://localhost:3000/uploads/xln/asset/audio/bindy.mp3",
      cover_art_url: "http://localhost:3000/uploads/xln/asset/images/cowboy_bebop.jpeg"
    },
    {
      name: "The Egg And You",
      artist: "Mai Yamane",
      url: "http://localhost:3000/uploads/xln/asset/audio/eggyou.mp3",
      cover_art_url: "http://localhost:3000/uploads/xln/asset/images/cowboy_bebop.jpeg"
    },
    // Add more songs as necessary
  ]);

  useEffect(() => {
    Amplitude.init({
      "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
      },
      "songs": songs
    });
 

    console.log("Amplitude -----", Amplitude )
    // Amplitude.bind('song_change', function(data){
    //   setCurrentSong(data.active_index);
    // });
  }, [songs]);
  
  const handlePlay = () => {
    Amplitude.play();
    setPlaying(true);
  }

  const handlePause = () => {
    Amplitude.pause();
    setPlaying(false);
  }
  
  const handleNext = () => {
    // if(song.length + 1){
    //   setCurrentSong(0)
    // }
    setCurrentSong(currentSong + 1)
    Amplitude.next();
  }

  const handlePrev = () => {
    if(song.length == -1){
      setCurrentSong(song.length)
    }
    setCurrentSong(currentSong - 1)
    Amplitude.prev();
  }

  const handleSelect = (index) => {
    Amplitude.setActiveSong(index);
    Amplitude.play();
    setPlaying(true);
  }

  return (
    <div className="audio_player">
      <div className="album_display">
        <img src={songs[currentSong].cover_art_url} alt={songs[currentSong].name} width="100%" height="600px" />
        <div className="controls">
          <div className="track_slider">
            <div>0:00</div>
            <div className="slide_container">
                <input type="range" min="1" max="100" value="0" class="slider" id="myRange" />
             </div>
            <div>5:00</div>
          </div>

          <div className="control_buttons">
            <div className="ctrl_btn">
              <button><i className="fa-solid fa-repeat"></i></button>
              <button><i className="fa-solid fa-shuffle"></i></button>
            </div>
            <div className="ctrl_btn main_ctrl">
            <button className="prev" onClick={handlePrev}><i className="fa-solid fa-backward"></i></button>
            {!playing ? <button className="play" onClick={handlePlay}><i className="fa-solid fa-play"></i></button>: <button className="pause" onClick={handlePause}><i className="fa-solid fa-pause"></i></button>}
            <button className="next" onClick={handleNext}><i className="fa-solid fa-forward"></i></button>
            </div>
            <div>
            <i className="fas fa-volume-up"></i>
            <input type="range" min="1" max="100" value="0" class="slider" id="myRange" />
            </div>
          </div>
          <div className="content-container">
            <h2>The Only Thing They Fear Is You </h2>
            <h4>Mick Gordon</h4>
            <h4>DOOM Eternal OST</h4>
          </div>


      </div>
      </div>

      <div className="playlist">
        <ul>
          {songs.map((song, index) => (
            <li key={song.name} className={index === currentSong ? "active" : ""} onClick={() => handleSelect(index)}>
             <i className="fas fa-volume-up"></i> <div>{song.name} - {song.artist}</div> <div>5:00</div>
            </li>
          ))}
          </ul>
      </div>
    </div>
  );
}
export default ViewAudioPlayer;
