import React, { useState, useEffect } from 'react';
import Amplitude from 'amplitudejs';
import "../../../../css/assets/Audio.scss"


const ViewAudioPlayer: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const [songs, setSongs] = useState([
    {
      name: "The Only Thing They Fear Is You",
      artist: "Mick Gordon",
      album: "DOOM Eternal OST",
      url: "http://localhost:5173/uploads/xln/asset/audio/doom_1.mp3",
      cover_art_url: "http://localhost:5173/uploads/xln/asset/images/doom_ost.jpg"
    },
    {
      name: "Scavenger Hunt",
      artist: "P.T. Adamczyk",
      album: "Cyberpunk 2077 OST",
      url: "http://localhost:5173/uploads/xln/asset/audio/scavenger_hunt.mp3",
      cover_art_url: "http://localhost:5173/uploads/xln/asset/images/cyberpunk_2077_ost.jpg"
    },
    {
      name: "ASSAULT WAVES",
      artist: "強襲揚陸波",
      album: "Stardust Memory OST",
      url: "http://localhost:5173/uploads/xln/asset/audio/assault_waves.mp3",
      cover_art_url: "http://localhost:5173/uploads/xln/asset/images/stardust_memory_ost.jpeg"
    },
    {
      name: "Bindy",
      artist: "Seatbelts",
      album: "Cowboy Bebopl OST",
      url: "http://localhost:5173/uploads/xln/asset/audio/bindy.mp3",
      cover_art_url: "http://localhost:5173/uploads/xln/asset/images/cowboy_bebop.jpeg"
    },
    {
      name: "The Egg And You",
      artist: "Mai Yamane",
      album: "Cowboy Bebop OST",
      url: "http://localhost:5173/uploads/xln/asset/audio/eggyou.mp3",
      cover_art_url: "http://localhost:5173/uploads/xln/asset/images/cowboy_bebop.jpeg"
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
    if(songs.length == -1){
      setCurrentSong(songs.length)
    }
    setCurrentSong(currentSong - 1)
    Amplitude.prev();
  }

  const handleSelect = (index: number) => {
    Amplitude.setActiveSong(index);
    Amplitude.play();
    setPlaying(true);
  }

  return (
    <div className="audio_player">
      <div className="album_display_container">
      <div className="album_display">
        <img src={songs[currentSong].cover_art_url} alt={songs[currentSong].name} width="auto" height="100%" /> 
      </div>
      </div>

      <div className="album_display_panel">
      <div className="ctrl_btn main_ctrl">
            <button className="prev" onClick={handlePrev}><i className="fa-solid fa-backward"></i></button>
            {!playing ? <button className="play" onClick={handlePlay}><i className="fa-solid fa-play"></i></button>: <button className="pause" onClick={handlePause}><i className="fa-solid fa-pause"></i></button>}
            <button className="next" onClick={handleNext}><i className="fa-solid fa-forward"></i></button>
            </div>

        <div className="artist_details">
        <h4>{songs[currentSong].name.slice(0, 25)}... </h4>
            <p>{songs[currentSong].artist}</p>
            <p>{songs[currentSong].album}</p>
        </div>

            <div className="track_slider">
            <div>0:00</div>
            <div className="slide_container">
                <input type="range" min="1" max="100" value="0" />
             </div>
            <div>5:00</div>
          </div>

          <div className="ctrl_btn">
              <button><i className="fa-solid fa-repeat"></i></button>
              <button><i className="fa-solid fa-shuffle"></i></button>
            </div>
      </div>


      <div className="playlist">
        <div className="playlist-header">
          <h2>Audio Items</h2>
          <a href="#">See all</a>
        </div>
        <ul>
          {songs.map((song, index) => (
            <li key={song.name} className={index === currentSong ? "active" : ""} onClick={() => handleSelect(index)}>
             <h3>{(index + 1).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })}</h3>
             <img src={song.cover_art_url} height="90px" width={"auto"} />       
             <div className="artist_details">
        <h4>{song.name.slice(0, 25)}... </h4>
            <p>{song.artist}</p>
            <p>{song.album}</p>
        </div> 
        <div>5:00</div>
        <div>{Date.now()}</div>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-ellipsis"></i>
            </li>
          ))}
          </ul>
      </div>

    </div>
  );
}
export default ViewAudioPlayer;
