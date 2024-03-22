import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeContainer from './components/HomeContainer/HomeContainer';
import i18n from './components/traslation/Traslation.jsx';
import './App.scss';


i18n.init()

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
