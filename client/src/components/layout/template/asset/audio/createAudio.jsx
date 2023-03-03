import React, { useState, useEffect } from 'react';
import Form from '../../form/form';
import { FormWrapper } from '../../../HOC/form-wrapper';
import "../../../../../css/assets/Audio.scss"


function CreateAudioPlayer({ options }) {

  const [ values, setValues ] = useState({})
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



  return (
       <FormWrapper>
        <h4>Create Audio Asset</h4>
         <Form formData={options} setValues={setValues} values={values} />
        </FormWrapper>
  );
}
export default CreateAudioPlayer;
