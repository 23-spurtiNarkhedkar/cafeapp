import React from 'react'
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/NavLinks.js/ContactUs';
import SignUp from './components/SignUp';

import MapCarousel from './components/MapCarousel';
import Menu from './components/NavLinks.js/Menu';
import CardItem from './components/CardItem';
import UserApi from './components/UserApi';
import Log from './components/Log';
import ApiFecth from './components/TourProject/ApiFecth';
import Filterfunc from './components/Filterfunc';
import LifeCycle from './components/PractLifeCycle/LifeCycle';
import ReduxExample from './components/Redux/ReduxExample';
import Epistek from './components/TourProject/Epistek';


function App() {
  return (
    <>  
      <NavBar />
      {/* <LifeCycle/> */}
      {/* <Log/> */}
      {/* <UserApi /> */}
      {/* <ApiFecth/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
          <Route exact path='/menu' element={<Menu />} />
          {/* <Route exact path='/githubUsers' element={<Epistek/>} /> */}
          {/* <Route exact path='/contactUs' element={<ContactUs />} /> */}
          {/* <Route exact path='/contactUs' element={ <ReduxExample/>} /> */}
          <Route exact path='/contactUs' element={ <ContactUs/>} />
          <Route exact path='/search' element={<Filterfunc />} />
          {/* <Route exact path='/log' element={<Log />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


{/* <NavBar /> */ }
{/* <MapCarousel/> */ }
{/* <CardItem /> */ }
// <BrowserRouter>
{/* <Routes> */ }
{/* <Route exact path="/" render={() => <Redirect to="/home" />}></Route> */ }
// <Route exact path='/' element={<HomePage />} />
// <Route exact path='/home' element={<HomePage />} />
// <Route exact path='/aboutUs' element={<AboutUs />} />
// <Route exact path='/menu' element={<Menu/>} />
// <Route exact path='/contactUs' element={<ContactUs />} />
{/* <Route exact path='/LogIn' element={<LogIn />} /> */ }
{/* <Route exact path='/LogSign' element={<SignUp />} /> */ }
        // </Routes>
      // </BrowserRouter>