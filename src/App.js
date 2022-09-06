import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Pokemon from 'pokemon-images';
import Home from './pages/Home';
// import Articles from './pages/Articles';
import Navbar from './components/Navbar';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(24);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'http://localhost:3000/pokemon?page=',
  );
  const [totalPages, setTotalPages] = useState();
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  const [loading, setLoading] = useState(true);

  // console.log('currentPageUrl', currentPageUrl);
  // console.log('currentPage', currentPage);
  // console.log('nextPageUrl', nextPage);
  // currentPage > 1 && console.log('prevPageUrl', prevPage);

  // const pngEndpoint = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
  // const pngEndpoint = process.env.REACT_APP_POKEMON_IMAGES_URL;

  // const { REACT_APP_POKEMON_IMAGES_URL } = process.env;
  // console.log('pngEndpoint', REACT_APP_POKEMON_IMAGES_URL);
  // const pokemonImage = `<img src={${pngEndpoint}${p.id}.png} alt={p} />`

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(`${currentPageUrl}${currentPage}&limit=${perPage}`, {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res => {
        setLoading(false);
        setCurrentPage(res.data.currentPage);
        setTotalPages(res.data.totalPages);
        res.data.currentPage < totalPages &&
          setNextPage(`${res.data.next.page}`);
        res.data.currentPage > 1 && setPrevPage(`${res.data.previous.page}`);
        setPokemon(res.data.results);

      });

    return () => {
      // cleanup
      cancel();
    };
  }, [currentPage, currentPageUrl, totalPages, perPage]);

  console.log(pokemon.length)
  // console.log('pokemon',pokemon)
  function gotoNextPage() {
    console.log('nextPage', nextPage);
    setCurrentPage(nextPage);
  }

  function gotoPrevPage() {
    console.log('prevPage', prevPage);
    setCurrentPage(prevPage);
  }

  const changePerPage = (e) => {
    // console.log(e.target.value)
    setPerPage(e.target.value);
  }

  const changeCurrentPage = (e) => {
    // console.log(e.target.value)
    setCurrentPage(e.target.value);
  }

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route
            path='/'
            exact
            element={
              <Home
                pokemon={pokemon}
                loading={loading}
                changePerPage={changePerPage}
                changeCurrentPage={changeCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
                gotoNextPage={gotoNextPage}
                gotoPrevPage={gotoPrevPage}
              />
            }
          />
          {/* <Route path="/articles" element={<Articles/>} /> */}
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
