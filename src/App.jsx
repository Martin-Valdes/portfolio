import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeContainer from './components/HomeContainer/HomeContainer';

import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
           <Route path='/' element= {<HomeContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
