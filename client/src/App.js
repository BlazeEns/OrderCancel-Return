
import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Appereance from './pages/Appereance';
import CustomCss from './pages/CustomCss';
import Plan from './pages/Plan';
import Reviews from './pages/Reviews';
import Settings from './pages/settings';
import Documents from './pages/Document';
import Support from './pages/support';
import Analytics from './pages/Analytics'
import { useState } from 'react';
function App() {

 

  return (

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Appereance' element={<Appereance />}></Route>
      <Route path='/CustomCss' element={<CustomCss />}></Route>
      <Route path='/Plan' element={<Plan />}></Route>
      <Route path='/Reviews' element={<Reviews />}></Route>
      <Route path='/Settings' element={<Settings />}></Route>
      <Route path='/Documents' element={<Documents />}></Route>
      <Route path='/Support' element={<Support />}></Route>
      <Route path='/Analytics' element={<Analytics />}></Route>
    </Routes>
  );
}

export default App;
