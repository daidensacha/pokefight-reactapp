import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Play.scss';



const Play = () => {
  const {id} = useParams();
  const chosenPokemon = parseInt(id);
  console.log('id', chosenPokemon);

  const pokefightApiUrl = process.env.REACT_APP_GET_POKEMON_BY_ID;
  const pImages = process.env.REACT_APP_POKEMON_IMAGES_URL;

  const [playerPokemon, setPlayerPokemon] = useState(null);
  // const [pickedPokemon, setPickedPokemon] = useState(null);

  // const url = `${pokefightApiUrl}${chosenPokemon}`;
  // console.log('url', url);
  // setPickedPokemon(url);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${pokefightApiUrl}${chosenPokemon}`);
      const data = await response.json();
      setPlayerPokemon(data);
    };
    fetchPokemon();
  }, [pokefightApiUrl, chosenPokemon]);
  console.log(playerPokemon)

  return (
    <div className="container play">
      <h1>Play</h1>
      {/* {allPokemon?.find(pokeman => pokeman.id === parseInt(id))} */}
      {/* {allPokemon?.map(pokeman => pokeman.name.english + ' ')} */}
      {/* {allPokemon?.filter(pokeman => pokeman.id === parseInt(id))} */}
      {/* {playerPokemon} */}
      {playerPokemon?.name.english}<br />
      {playerPokemon?.type.map(type => type + ' ')}<br />
      HP: {playerPokemon?.base.HP}<br />
      Attack: {playerPokemon?.base.Attack}<br />
      Defence: {playerPokemon?.base.Defense}<br />
      Sp. Attack: {playerPokemon?.base['Sp. Attack']}<br />
      Sp. Defence: {playerPokemon?.base['Sp. Defense']}<br />
      Speed: {playerPokemon?.base.Speed}<br />
      <img src={`${pImages}/${id}.png`} alt={playerPokemon?.name.english} />
      {/* <img src={playerPokemon?.sprites.front_default} alt={playerPokemon?.name.english} /> */}



    </div>
  );
}

export default Play;