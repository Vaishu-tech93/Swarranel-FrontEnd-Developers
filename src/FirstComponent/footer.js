import React from 'react'
import { Link } from 'react-router-dom'
import SihayiSe from '../FirstComponent/SihayiSe';
import img from '../FirstComponent/footer-img.jpg';
import Episode from '../FirstComponent/Episode';
import Abhang from '../FirstComponent/Abhang';


function Footer() {
  return (
    <>   
   
    <footer style={{backgroundImage :`URL(${img})`}} className='h-5/6 md:h-full lg:h-full  '>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white text-sm font-semibold  ">
    
    <div className="flex flex-col items-start p-6 ">
      <img src="/Swarraneel.png" className="h-50 w-68 mt-8" alt="Swarraneel Logo" />
      <p className="mt-4 mb-4 text-xl">
        Swarraneel Entertainments is committed to bringing performing as well as non-performing arts to life by bringing quality events to art lovers like Musical Shows, Art Exhibitions, Professional Drama Shows, Book Publications, and other such arts.
      </p>
    </div>

    <div className="flex flex-col p-8">
      <h3 className="text-3xl">Quick Connect</h3><br/>
      <div className="flex items-center mt-5">
              <svg className="h-6 w-6 text-white-900 dark:text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <circle cx="12" cy="11" r="3" />  
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z " />
              </svg>
      <p className="mt-">
        <Link to="http://localhost:3000/Home" className="hover:text-pink-500 dark:text-white text-xl ">
          Pimple Saudagar, Pune 411027, MH, IN
        </Link>
      </p>
      </div>
      <div className="flex items-center mb-4 mt-5">
              <svg className="h-6 w-6 mt-3 text-white-900 dark:text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
      <p className="mt-4">
        <Link to="https://www.swarraneel.in/membership/#" className="hover:text-pink-500 dark:text-white text-xl m-4">
          (7522) 955-281
        </Link>
      </p>
      </div>
      <div className="flex items-center">
              <svg className="h-6 w-6 mt-5 text-white-900 dark:text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.036 8.278l9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
      <p className="">
        <Link to="https://outlook.live.com/mail/0/" className="hover:text-pink-500 dark:text-white text-xl m-4">
          Nilesh@swarraneel.in
        </Link>
      </p></div>
    </div>

    <div className="flex flex-col p-6 mt-">
      <h1 className="text-3xl">Recent Posts</h1>
      <p className="mt-4">
        <Link to="/SihayiSe" className="block py-2 text-lg hover:text-pink-500 dark:text-white mt-10">
          Sahir ki sihayi se
        </Link>
        <p className="text-lg">February 6, 2024</p>
      </p><br/>
      <p>
        <Link to="/Episode" className="block py-2 text-lg hover:text-pink-500 dark:text-white">
          Nostalgic 90's episode-3
        </Link>
        <p className="text-lg">January 10, 2024</p>
      </p><br/>
      <p>
        <Link to="/Abhang" className="block py-2 text-lg hover:text-pink-500 dark:text-white">
          ABHANG-Musical Event
        </Link>
        <p className="text-lg">June 15, 2023</p>
      </p>
    </div>

    <div className="flex justify-center items-center p-6">
      <img src='./1.jpg' height="300px" width="300px" className="w-96" alt="Event Image" />
    </div>

  </div>

  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center">
    <span className="text-sm text-gray-500 dark:text-gray-400">
      <Link to="http://localhost:3000/Home" className="hover:text-pink-500 dark:text-white">Swarraneel Entertainment</Link>
      | Designed by: 
      <Link to="https://sameerdigital.com/" className="hover:text-pink-500 dark:hover:text-pink-500"> sameer digital</Link>
      | 
      <Link to="https://happyapes.com/" className="hover:text-pink-500 dark:text-white"> Happy Apes</Link>
      @ copyright All Rights Reserved.
    </span>
  </div>
</footer>
    </>
  );
}


export default Footer
