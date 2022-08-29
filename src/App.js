import React from 'react'
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/NavLinks.js/ContactUs';
import Menu from './components/NavLinks.js/Menu';
import ApiFecth from './components/TourProject/ApiFecth';
import Filterfunc from './components/Filterfunc';



function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/fetchphoto' element={<ApiFecth />} />
          <Route exact path='/contactUs' element={<ContactUs />} />
          <Route exact path='/search' element={<Filterfunc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

