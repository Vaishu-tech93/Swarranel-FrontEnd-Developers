import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import ContactUs from './fourthComponent/ContactUs';
import ElilteMembership from './thirdComponent/ElilteMembership';
import Home from './FirstComponent/Home';
import About from './secondComponent/About';
import { Link } from 'react-router-dom';
import Nav1 from './FirstComponent/Nav1';
import Seat from './fourthComponent/Seat';
import Episode from './secondComponent/Episode';
import SihayiSe from './fourthComponent/SihayiSe';
import Footer from './FirstComponent/footer';
import Abhang from './secondComponent/Abhang';

function App() {
  return (
    <>   
         <BrowserRouter>
         <Nav1/>
         {/* <Home/> */}
          <Routes>
      
      <Route path="/home" element={<Home />} />
      
      <Route path="/About" element={<About />} />

      <Route path="/ElilteMembership" element={<ElilteMembership />} />

      <Route path="/ContactUs" element={<ContactUs />} />

      <Route path="/SihayiSe" element={<SihayiSe />}/>

      <Route path ="/Episode" element={<Episode/>}/>

      <Route path="/Abhang" element={<Abhang/>}/>

      <Route path="/Seat" element={<Seat/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter> 
    
    </>
  );
}

export default App
