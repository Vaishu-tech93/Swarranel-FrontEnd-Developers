import React from 'react'
import img from '../FirstComponent/bg-1.jpg';
import { Link } from 'react-router-dom';

 function SihayiSe() {
  return (

    <>
    <div>
      
      <div  class=" w-900 h-900 bg-gray-200 mt-24">
        <img src="Horizontal.jpg" class="flex w-full "></img>
            <div class="flex">
        <img src="Horizontal.jpg" class="h-96 w-96 ml-20 hover:scale-110 transition duration-500 cursor-pointer mb-10 mt-10"></img>
        
        <p class=" text-black-900 dark:text-black-900 ml-10 mr-48 mt-10">
        <h1 class="text-4xl font-black text-black-900 dark:text-white">Sahir ki Siyahi Se</h1><br></br>
            <p>Date: SUNDAY, 25TH FEB    |   Time – 06:00 PM | Ticket rate – Rs 300 & 200</p><br></br>
            <p>Vocals:       Nilesh Mate, Jitendra Abhyankar, Swapnaja Lele, Bhagyashree Abhyankar</p><br></br>
            <p>Genre:
            Bollywood</p><br></br>
            <p>Language:
            Hindi</p><br></br>
            </p>
        
        </div>
        <button type="button" class="w-44 text-white bg-pink-700 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium text-sm px-5 py-2.5 text-center mb-10 dark:bg-pink-600 dark:hover:bg-pink-500 dark:focus:ring-pink-700 mb-10 ml-20 ">  <Link to="/Seat">Pick your (seat)</Link></button>

        <div style={{backgroundImage :`URL(${img})`}} className='h-5/6'>
        <div class="ml-20 ">
        <h1 class="text-4xl font-bold text-black-900 dark:text-white pt-10">About the Event</h1>
        <p class="text-xl text-gray-900 dark:text-white mt-10 mr-10">magine an evening immersed in the soul-stirring lyrics of Sahir Ludhianvi brought to life on stage. We’re happy to bring to you a live musical event that captures the essence of his timeless poetry through soulful renditions and captivating narratives. Let’s celebrate the genius of Sahir Ludhianvi together on the occasion of his upcoming 103rd Birth Anniversary!</p>
        </div>
        </div>

        <div style={{backgroundImage :`URL(${img})`}} className='h-5/6'>
       
        <div class="  text-white-500">
   <div class="">
    <h5 class=" pt-20 text-center text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white ">Vocalists</h5>
    <h1 class="text-left text-gray-500 dark:text-gray-400 m-20   mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400  text-center mt-5 mb-20">Top Performers of the event</h1>
    <div class="flex ">
        <div>
        <img src="/Nilesh-Mate-Vocalist.png" class="h-28 w-28 ml-64"></img>
        <h5 class=" pt-5 ml-64 text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white ">Nilesh Mate</h5>
        </div>
        <div>
            <img src="/Jitendra-Abhyankar.png" class="h-28 w-28 ml-44"></img>
            <h5 class=" pt-5 ml-44 text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white ">Jitendra Abhyankar</h5>
        </div>
        <div>
            <img src="/Swapnaja.png" class="h-28 w-28 ml-44"></img>
            <h5 class=" pt-5 ml-44 text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white ">Swapnaja Lele</h5>
        </div>
        <div>
            <img src="/Kalyani-Deshpande.png" class="h-28 w-28 ml-44"></img>
            <h5 class=" pt-5 ml-44 text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white mb-10 ">Bhagyashree
            Abhyankar</h5>
        </div>
        </div>
    </div>
   
    </div>
    </div>
    
<div>
<h1 class="pt-20 ml-20 text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white">Venue</h1>
<p class="text-4xl text-gray-900 dark:text-white ml-20 pt-10">Auditorium – Elpro City Square</p>
<div class="grid grid-cols-2 gap-6 sm:grid-cols-2">
    <p class=" text-gray-500 dark:text-gray-400 ml-20 pt-5">ELPRO CITY SQUARE is Pune’s latest entertainment and lifestyle destination. Located in the heart of PCMC, it is designed as a mixed use family destination offering several unique destinations. With several first of its kind brands in PCMC – ELPRO CITY SQUARE offers the finest in retail and fashion.</p>
    <p class=" text-gray-500 dark:text-gray-400 ml-20 pt-5">Anchoring the destination is a large outdoor plaza designed to host community events, concerts and celebrations. </p>
    <p class=" text-gray-500 dark:text-gray-400 ml-20 pt-5"> ELPRO CITY SQUARE also features The Auditorium a 700+ seater unique destination designed for hosting concerts, events and conferences.</p>
    <img src="/elpro-city-square-new.webp" class="mb-10 ml-20"></img>
</div>
</div>

<div>
    <h1 class="pt-20 mb-20 text-center text-black-500 dark:text-black-400  text-6xl text-gray-900 dark:text-white" >Get Directions</h1>
    <div class="ml-5   ">	
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6826952877595!2d73.78445827519445!3d18.633336382482216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b6cca34641%3A0xd05a352540e8ca1a!2sRamkrishna%20More%20Natyagruha!5e0!3m2!1sen!2sin!4v1724949314316!5m2!1sen!2sin" width="1600" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
     </div>
</div>
   
    </div>

   
    
    </div>
  <div class="ml-5  mt-10">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Terms and Conditions:</h1>
    <div class="ml=10 mt-10">
    <p>1. Age Limit: Open to all</p><br></br>
    <p>2. Internet handling fee per ticket may be levied. Please check your total amount before payment.</p><br></br>
    <p>3. Tickets once booked cannot be exchanged or refunded.</p><br></br>
    <p>4. We recommend that you arrive at least 20 minutes prior at the venue.</p><br></br>
    <p>5. No Entry without Ticket / Passes</p><br></br>
  </div>
  </div>
    </>
  );
}
export default  SihayiSe