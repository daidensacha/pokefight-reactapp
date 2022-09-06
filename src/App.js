import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const pokefightApiUrl = process.env.REACT_APP_POKEFIGHT_API_URL;

  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(24);
  const [currentPageUrl, setCurrentPageUrl] = useState(pokefightApiUrl);
  const [totalPages, setTotalPages] = useState();
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentPageUrl(`${pokefightApiUrl}`);
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
  }, [currentPage, currentPageUrl, totalPages, perPage, pokefightApiUrl]);


  function gotoNextPage() {
    // console.log('nextPage', nextPage);
    setCurrentPage(nextPage);
  }

  function gotoPrevPage() {
    // console.log('prevPage', prevPage);
    setCurrentPage(prevPage);
  }

  const changePerPage = e => {
    // console.log(e.target.value)
    setPerPage(e.target.value);
  };

  const changeCurrentPage = e => {
    // console.log(e.target.value)
    setCurrentPage(e.target.value);
  };

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
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
