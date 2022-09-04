import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
// import Articles from './pages/Articles';
import Navbar from './components/Navbar';




function App() {

  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"]);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
        <Route path="/" exact element={<Home pokemom={pokemon}/>} />
        {/* <Route path="/articles" element={<Articles/>} /> */}
        <Route path='*' element={<Home />} />
        </Routes>
      </main>
    </Router>

  );
}

export default App;