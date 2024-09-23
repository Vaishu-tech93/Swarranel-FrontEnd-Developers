import React from 'react'
import { Link } from 'react-router-dom'
import SihayiSe from '../FirstComponent/SihayiSe';
import img from '../FirstComponent/footer-img.jpg';
import Episode from '../FirstComponent/Episode';
import Abhang from '../FirstComponent/Abhang';

function Footer() {
  return (
    <>   
   
    <footer style={{backgroundImage :`URL(${img})`}} className='h-5/6 md:h-full lg:h-full'>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white text-sm font-semibold">
    
    <div className="flex flex-col items-start p-6">
      <img src="/Swarraneel.png" className="h-50 w-68 mt-8" alt="Swarraneel Logo" />
      <p className="mt-4 mb-4 text-lg">
        Swarraneel Entertainments is committed to bringing performing as well as non-performing arts to life by bringing quality events to art lovers like Musical Shows, Art Exhibitions, Professional Drama Shows, Book Publications, and other such arts.
      </p>
    </div>

    <div className="flex flex-col p-6">
      <h3 className="text-3xl">Quick Connect</h3>
      <p className="mt-4">
        <Link to="http://localhost:3000/Home" className="hover:text-pink-500 dark:text-white">
          Pimple Saudagar, Pune 411027, MH, IN
        </Link>
      </p>
      <p className="mt-4">
        <Link to="https://www.swarraneel.in/membership/#" className="hover:text-pink-500 dark:text-white">
          (7522) 955-281
        </Link>
      </p>
      <p className="mt-4">
        <Link to="https://outlook.live.com/mail/0/" className="hover:text-pink-500 dark:text-white">
          Nilesh@swarraneel.in
        </Link>
      </p>
    </div>

    <div className="flex flex-col p-6">
      <h1 className="text-3xl">Recent Posts</h1>
      <p className="mt-4">
        <Link to="/SihayiSe" className="block py-2 text-lg hover:text-pink-500 dark:text-white">
          Sahir ki sihayi se
        </Link>
        <p className="text-lg">February 6, 2024</p>
      </p>
      <p>
        <Link to="/Episode" className="block py-2 text-lg hover:text-pink-500 dark:text-white">
          Nostalgic 90's episode-3
        </Link>
        <p className="text-lg">January 10, 2024</p>
      </p>
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
