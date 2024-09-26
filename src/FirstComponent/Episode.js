

import React from 'react';
import img from '../FirstComponent/bg-1.jpg';
import verticalBanner from '../FirstComponent/Vertical-Banner.jpg';
import horizontalBanner from '../FirstComponent/Horizontal-Banner-1536x480.jpg';

function Episode() {
  return (
    <> 
      {/* Horizontal Banner */}
      <div className="mt-20 pt-4 h-auto">
        <img src={horizontalBanner} alt="Horizontal Banner" className="w-full h-auto" />
      </div>

      {/* Main content with vertical banner and text */}
      <div className="flex flex-col md:flex-row items-start  mt-10 md:mt-20 px-5">
        <img
          src={verticalBanner}
          alt="Vertical Banner"
          className="mx-auto md:ml-44  md:mt-0 w-72 md:w-96 h-auto"
        />
        <div className="md:ml-20 ml-0 mr-5 md:mr-44 mt-10 md:mt-0 text-left">
          <h1 className="text-2xl md:text-4xl font-black text-black mt-5">Nostalgic 90's - Episode 3</h1>
          <p className="mt-4 text-base md:text-lg">Date: SUNDAY, 21ST JAN | Time – 06:00 PM | Ticket rate – Rs 400, 300 & 200</p>
          <p className="mt-2 text-base md:text-lg">Vocals: Nilesh Mate, Jitendra Abhyankar, Swapnaja Lele, Bhagyashree Abhyankar</p>
          <p className="mt-2 text-base md:text-lg">Genre: Bollywood</p>
          <p className="mt-2 text-base md:text-lg">Language: Hindi</p>
        </div>
      </div>

      {/* Ticket button */}
      <div className="flex justify-center md:justify-start ml-0 md:ml-64">
        <button className="w-44 text-white bg-pink-700 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium text-sm px-5 py-2.5 text-center mt-10 mb-10">
          Pick your seat
        </button>
      </div>

      {/* About the event section */}
      <div style={{ backgroundImage: `url(${img})` }} className="h-full bg-cover bg-center py-16 px-5">
        <h1 className="text-2xl md:text-5xl font-black text-black mb-10">About the Event</h1>
        <p className="text-base md:text-xl text-black leading-relaxed first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:mr-3">
          A musical journey of the golden era of Bollywood….the 90’s….where all of us witnessed a complete change-over
          of the music in the industry. Let’s get nostalgic yet again as we bring to you some select duets performed by the
          likes of Udit Narayan, Kumar Sanu, Alka Yagnik, Kavita Krishnamurthy and many more iconic singers of this
          musical era… with LIVE SAXOPHONE. Book your tickets now and get ready to be swept away by the melodies that
          have stood the test of time!
        </p>
      </div>

      {/* Vocalists Section */}
      
      <div className="py- px-5">
  <h5 className="text-center text-2xl md:text-4xl font-black text-black mt-10">Vocalists</h5>
  <h2 className="text-center text-gray-500 mt-4 mb-10 text-base md:text-lg">Top Performers of the event</h2>
  
  {/* Updated Grid layout for Vocalists */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
    {[
      { name: 'Nilesh Mate', imgSrc: '/Nilesh-Mate-Vocalist.png' },
      { name: 'Jitendra Abhyankar', imgSrc: '/Jitendra-Abhyankar.png' },
      { name: 'Swarada Godbole', imgSrc: '/Swarada-Godbole-Vocalist.png' },
      { name: 'Kalyani Deshpande', imgSrc: '/Kalyani-Deshpande.png' },
      { name: 'Sonale Sathe', imgSrc: '/Sonale-Sathe-Vocalist.png' },
    ].map((vocalist, index) => (
      <div key={index} className="m-4">
        <img src={vocalist.imgSrc} alt={vocalist.name} className="h-32 md:h-44 w-32 md:w-44 mx-auto mb-4" />
        <h5 className="text-lg md:text-xl font-black text-black text-center">{vocalist.name}</h5>
      </div>
    ))}
  </div>
</div>


      {/* Venue Section */}
      <div className="py-10 px-5 md:px-20 mt-20">
        <h1 className="text-2xl md:text-4xl font-black text-black">Venue</h1>
        <p className="text-lg md:text-2xl text-gray-900 pt-10">Auditorium – Elpro City Square</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="space-y-6">
            <p className="text-gray-500">
              ELPRO CITY SQUARE is Pune’s latest entertainment and lifestyle destination. Located in the heart of PCMC, it is designed as a mixed-use family destination offering several unique destinations.
            </p>
            <p className="text-gray-500">
              Anchoring the destination is a large outdoor plaza designed to host community events, concerts and celebrations.
            </p>
            <p className="text-gray-500">
              ELPRO CITY SQUARE also features The Auditorium, a 700+ seater unique destination designed for hosting concerts, events, and conferences.
            </p>
          </div>

          <div className="w-full">
            <img src="/elpro-city-square-new.webp" className="w-full h-auto object-cover" alt="Elpro City Square" />
          </div>
        </div>
      </div>

      {/* Directions Section */}
      <div className="bg-gray-100 py-20">
        <h1 className="text-center text-3xl md:text-6xl text-black mb-20">Get Directions</h1>
        <div className="ml-5 md:ml-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6826952877595!2d73.78445827519445!3d18.633336382482216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b6cca34641%3A0xd05a352540e8ca1a!2sRamkrishna%20More%20Natyagruha!5e0!3m2!1sen!2sin!4v1724949314316!5m2!1sen!2sin"
            width="100%"
            height="600"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Event Location"
          ></iframe>
        </div>
      </div>

      {/* Terms and Conditions Section */}
      <div className="px-5 mt-10">
        <h1 className="text-2xl md:text-4xl font-bold text-black">Terms and Conditions:</h1>
        <div className="mt-5 text-base md:text-lg">
          <p>1. Age Limit: Open to all</p><br />
          <p>2. Internet handling fee per ticket may be levied. Please check your total amount before payment.</p><br />
          <p>3. Tickets once booked cannot be exchanged or refunded.</p><br />
          <p>4. We recommend that you arrive at least 20 minutes prior to the venue.</p><br />
          <p>5. No Entry without Ticket / Passes</p><br />
        </div>
      </div>
    </>
  );
}

export default Episode;
