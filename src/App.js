import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Detail from './Components/Detail';
import TvShows from './Components/TvShows';
import Sports from './Components/Sports';
import Kids from './Components/Kids';
import Movies from './Components/Movies';
import Disney from './Components/Disney';
import Pixar from './Components/Pixar';
import Marvel from './Components/Marvel';
import StarWars from './Components/StarWars';
import NatGeo from './Components/NatGeo';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' caseSensitive={false} element={<Home/>} />
          <Route path='/detail/:id' caseSensitive={false} element={<Detail/>} />
          <Route path='/tv' element={<TvShows/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/sports' element={<Sports/>} />
          <Route path='/kids' element={<Kids/>} />
          <Route path='/disney' element={<Disney/>} />
          <Route path='/pixar' element={<Pixar/>} />
          <Route path='/marvel' element={<Marvel/>} />
          <Route path='/natgeo' element={<NatGeo/>} />
          <Route path='/star-wars' element={<StarWars/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
