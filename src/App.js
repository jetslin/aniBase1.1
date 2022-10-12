import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import SingleView from './pages/SingleView';
import MainNavigation from './components/MainNavigation';
import {SearchContext} from './context/search';

function App() {
  const [animeData, setAnimeData] = useState([])
  const [singleData, setSingleData] = useState({})

  const setData = (data) => {
    setAnimeData(data);
  };
  const setSingle = (data) => {
    setSingleData(data);
  };

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}`
    ).then((response) => response.json());
  };


  return (
    <SearchContext.Provider 
      value={{search, animeData, setData, singleData, setSingle}}
    >
    <Router>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path="/aniBase" element={<Home/>}/>
          <Route path="/aniBase/results" element={<Results/>}/>
          <Route path="/aniBase/single-view" element={<SingleView/>}/>
        </Routes>
      </main>
      
    </Router>
    </SearchContext.Provider>
  );
}

export default App;
