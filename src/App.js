import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Contact from './FirstComponent/ContactUs';
import ElilteMembership from './FirstComponent/ElilteMembership';
import Home from './FirstComponent/Home';
import About from './FirstComponent/About';
import { Link } from 'react-router-dom';
import Nav1 from './FirstComponent/Nav1';
import Episode from './FirstComponent/Episode';
import SihayiSe from './FirstComponent/SihayiSe';
import Footer from './FirstComponent/footer';
import Abhang from './FirstComponent/Abhang';

function App() {
  return (
    <>   
         <BrowserRouter>
         <Nav1/>
         
          <Routes>
      
      <Route path="/home" element={<Home />} />
      
      <Route path="/About" element={<About />} />

      <Route path="/ElilteMembership" element={<ElilteMembership />} />

      <Route path="/ContactUs" element={<Contact />} />

      <Route path="/SihayiSe" element={<SihayiSe />}/>

      <Route path ="/Episode" element={<Episode/>}/>

      <Route path="/Abhang" element={<Abhang/>}/>

      
    </Routes>
    <Footer/>
    </BrowserRouter> 
    
    </>
  );
}

export default App
