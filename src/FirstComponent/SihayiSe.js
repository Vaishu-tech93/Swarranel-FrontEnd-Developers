import React from 'react'
import img from '../FirstComponent/bg-1.jpg';
import { Link } from 'react-router-dom';

 function SihayiSe() {
  return (
<>
<div className="container mx-auto">
  <div className="w-full h-auto bg-gray-200 mt-24 p-6">
    <img 
      src="Horizontal.jpg" 
      className="hidden md:block w-full h-auto" 
      alt="Event Header" 
    />
    
    <div className="flex flex-col md:flex-row mt-6">
      <div className="flex-shrink-0">
        <img 
          src="Horizontal.jpg" 
          className="h-96 w-full md:w-96 md:h-96 hover:scale-110 transition duration-500 cursor-pointer mb-6 mt-6" 
          alt="Event Thumbnail" 
        />
      </div>
      <div className="text-black-900 dark:text-black-900 ml-0 md:ml-10 mr-0 md:mr-48 mt-6">
        <h1 className="text-4xl font-black text-black-900 dark:text-white">Sahir ki Siyahi Se</h1>
        <p className="mt-2">Date: SUNDAY, 25TH FEB | Time – 06:00 PM | Ticket rate – Rs 300 & 200</p>
        <p className="mt-2">Vocals: Nilesh Mate, Jitendra Abhyankar, Swapnaja Lele, Bhagyashree Abhyankar</p>
        <p className="mt-2">Genre: Bollywood</p>
        <p className="mt-2">Language: Hindi</p>
      </div>
    </div>
    
    <button 
      type="button" 
      className="w-44 text-white bg-pink-700 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium text-sm px-5 py-2.5 text-center mb-10 mt-6 ml-0 md:ml-20"
    >
      <Link to="/Seat">Pick your (seat)</Link>
    </button>

    <div style={{ backgroundImage: `URL(${img})` }} className='h-5/6 p-6'>
      <h1 className="text-4xl font-bold text-black-900 dark:text-white pt-10">About the Event</h1>
      <p className="text-xl text-gray-900 dark:text-white mt-10">Imagine an evening immersed in the soul-stirring lyrics of Sahir Ludhianvi brought to life on stage. We’re happy to bring to you a live musical event that captures the essence of his timeless poetry through soulful renditions and captivating narratives. Let’s celebrate the genius of Sahir Ludhianvi together on the occasion of his upcoming 103rd Birth Anniversary!</p>
    </div>

    <div style={{ backgroundImage: `URL(${img})` }} className='h-5/6 p-6'>
      <h5 className="pt-20 text-center text-black-500 dark:text-black-400 text-4xl font-black text-black-900 dark:text-white">Vocalists</h5>
      <h1 className="text-center text-gray-500 dark:text-gray-400 m-20 mb-3 text-lg md:text-xl">Top Performers of the event</h1>
      
      <div className="flex flex-wrap justify-center">
        {['Nilesh-Mate-Vocalist.png', 'Jitendra-Abhyankar.png', 'Swapnaja.png', 'Kalyani-Deshpande.png'].map((imgSrc, index) => (
          <div key={index} className="flex flex-col items-center mx-4 mb-10">
            <img src={`/${imgSrc}`} className="h-28 w-28" alt={`Vocalist ${index + 1}`} />
            <h5 className="pt-5 text-black-500 dark:text-black-400 text-4xl font-black">{['Nilesh Mate', 'Jitendra Abhyankar', 'Swapnaja Lele', 'Bhagyashree Abhyankar'][index]}</h5>
          </div>
        ))}
      </div>
    </div>

    <div className="p-6">
      <h1 className="pt-20 text-black-500 dark:text-black-400 text-4xl font-black text-black-900 dark:text-white">Venue</h1>
      <p className="text-4xl text-gray-900 dark:text-white pt-10">Auditorium – Elpro City Square</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <p className="text-gray-500 dark:text-gray-400">ELPRO CITY SQUARE is Pune’s latest entertainment and lifestyle destination. Located in the heart of PCMC, it is designed as a mixed-use family destination offering several unique destinations. With several first-of-its-kind brands in PCMC – ELPRO CITY SQUARE offers the finest in retail and fashion.</p>
        <p className="text-gray-500 dark:text-gray-400">Anchoring the destination is a large outdoor plaza designed to host community events, concerts, and celebrations.</p>
        <p className="text-gray-500 dark:text-gray-400">ELPRO CITY SQUARE also features The Auditorium, a 700+ seater unique destination designed for hosting concerts, events, and conferences.</p>
        <img src="/elpro-city-square-new.webp" className="mb-10 w-full" alt="Elpro City Square" />
      </div>
    </div>

    <div className="p-6">
      <h1 className="pt-20 mb-20 text-center text-black-500 dark:text-black-400 text-6xl text-gray-900 dark:text-white">Get Directions</h1>
      <div className="ml-5">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6826952877595!2d73.78445827519445!3d18.633336382482216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b6cca34641%3A0xd05a352540e8ca1a!2sRamkrishna%20More%20Natyagruha!5e0!3m2!1sen!2sin!4v1724949314316!5m2!1sen!2sin" 
          width="100%" 
          height="600" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <div className="ml-5 mt-10 p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Terms and Conditions:</h1>
      <div className="mt-10">
        <p>1. Age Limit: Open to all</p>
        <p>2. Internet handling fee per ticket may be levied. Please check your total amount before payment.</p>
        <p>3. Tickets once booked cannot be exchanged or refunded.</p>
        <p>4. We recommend that you arrive at least 20 minutes prior at the venue.</p>
        <p>5. No Entry without Ticket / Passes</p>
      </div>
    </div>
  </div>
</div>


    </>
  );
}
export default  SihayiSe