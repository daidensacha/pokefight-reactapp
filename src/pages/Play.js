import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Play.scss';

const Play = () => {
  const { id } = useParams();
  const chosenPokemon = parseInt(id) || num();
  const randomComputerPokemonId = num();

  const pokefightApiUrl = process.env.REACT_APP_GET_POKEMON_BY_ID;
  const pImages = process.env.REACT_APP_POKEMON_IMAGES_URL;

  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [playerPokemonId, setPlayerPokemonId] = useState(chosenPokemon);

  const [computerPokemon, setComputerPokemon] = useState(null);
  const [randomPokemonId, setRandomPokemonId] = useState(randomComputerPokemonId);

  const [startingPlayer, setStartingPlayer] = useState('Toss to start');

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${pokefightApiUrl}${playerPokemonId}`);
      const data = await response.json();
      setPlayerPokemon(data);
    };
    fetchPokemon();
  }, [pokefightApiUrl, playerPokemonId]);
  // console.log(playerPokemon);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${pokefightApiUrl}${randomPokemonId}`);
      const data = await response.json();
      setComputerPokemon(data);
    };
    fetchPokemon();
  }, [pokefightApiUrl, randomPokemonId]);

  // Randon number generator for pokemon id's
  function num() {
    return Math.floor(Math.random() * 809) + 1;
  }

  // change pokemon handler
  const changePokemonHandler = () => {
    setPlayerPokemonId(num());
    setRandomPokemonId(num());
  };


  const startHandler = () => {
    setStartingPlayer(num() % 2 === 0 ? 'Guest starts' : 'Computer starts');
  }

  return (
    <div className='container play'>
      <h1>Play</h1>

      <div className='row players'>
        <div className='col-6'>
          <div className='player guest'>
            <div className='header'>
              <h2>Guest</h2>

              <h3>{playerPokemon?.name.english}</h3>
              <img
                src={`${pImages}/${playerPokemon?.id}.png`}
                alt={playerPokemon?.name.english}
              />
              <h4>
                Type:{' '}
                {playerPokemon?.type.map(
                  playerPokemon?.type.length === 1
                    ? type => type
                    : type => type + ', ',
                )}
              </h4>
            </div>

            <div className='body'>
              <p>
                <span className='base'>HP: </span>
                {playerPokemon?.base.HP}
              </p>
              <p>
                <span className='base'>Attack: </span>
                {playerPokemon?.base.Attack}
              </p>
              <p>
                <span className='base'>Defence: </span>
                {playerPokemon?.base.Defense}
              </p>
              <p>
                <span className='base'>Sp. Attack: </span>
                {playerPokemon?.base['Sp. Attack']}
              </p>
              <p>
                <span className='base'>Sp. Defence: </span>
                {playerPokemon?.base['Sp. Defense']}
              </p>
              <p>
                <span className='base'>Speed: </span>
                {playerPokemon?.base.Speed}
              </p>
            </div>
            <div className='footer'>
              <button onClick={changePokemonHandler}>Change</button>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <div className='player computer'>
            <div className='header'>
              <h2>Computer</h2>
              <h3>{computerPokemon?.name.english}</h3>
              <img
                src={`${pImages}/${computerPokemon?.id}.png`}
                alt={computerPokemon?.name.english}
              />
              <h4>
                Type:{' '}
                {computerPokemon?.type.map(
                  computerPokemon?.type.length === 1
                    ? type => type
                    : type => type + ', ',
                )}
              </h4>
            </div>

            <div className='body'>
              <p>
                <span className='base'>HP: </span>
                {computerPokemon?.base.HP}
              </p>
              <p>
                <span className='base'>Attack: </span>
                {computerPokemon?.base.Attack}
              </p>
              <p>
                <span className='base'>Defence: </span>
                {computerPokemon?.base.Defense}
              </p>
              <p>
                <span className='base'>Sp. Attack: </span>
                {computerPokemon?.base['Sp. Attack']}
              </p>
              <p>
                <span className='base'>Sp. Defence: </span>
                {computerPokemon?.base['Sp. Defense']}
              </p>
              <p>
                <span className='base'>Speed: </span>
                {computerPokemon?.base.Speed}
              </p>
            </div>
            <div className='footer'>
              <button className='btn btn-primary' onClick={() => setRandomPokemonId(num())}>Change</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row console'>
        <div className='col-12'>
          <button onClick={startHandler}>Toss to start</button>
          <h2>{startingPlayer}</h2>
        </div>
      </div>
    </div>
  );
};

export default Play;
