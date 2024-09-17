import React from 'react'
import { Link } from 'react-router-dom';
import img from '../secondComponent/bg-1.jpg';
import verticalBanner from '../secondComponent/Vertical-Banner.jpg';
import horizontalBanner from '../secondComponent/Horizontal-Banner-1536x480.jpg';

function Episode() {
  return (
   <>
   <div>
    <div class="mt-20 pt-4 h-150  ">
    <img src={horizontalBanner}></img>
   </div>
   <div class="flex">
    <img src={verticalBanner} class="ml-44 mt-20 w-96 h-200"></img>
    <p class=" text-black-900 dark:text-black-900 ml-10 mr-48 mt-20">
        <h1 class="text-4xl font-black text-black-900 dark:text-white">Nostalgic 90's - Episode 3</h1><br></br>
            <p>Date: SUNDAY, 21ST JAN    |   Time – 06:00 PM | Ticket rate – Rs 400, 300 & 200</p><br></br>
            <p>Vocals:       Nilesh Mate, Jitendra Abhyankar, Swapnaja Lele, Bhagyashree Abhyankar</p><br></br>
            <p>Genre:
            Bollywood</p><br></br>
            <p>Language:
            Hindi</p><br></br>
            </p>
   </div>
   <button type="button" class="w-44 text-white bg-pink-700 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium text-sm px-5 py-2.5 text-center mb-10 mt-10 dark:bg-pink-600 dark:hover:bg-pink-500 dark:focus:ring-pink-700 mb-10 ml-44 ">Pick your (seat)</button>

   {/* <div> */}
   <div style={{backgroundImage :`URL(${img})`}} className='h-5/6 '>
   <h1 class="text-5xl ml-20 font-black text-black-900 dark:text-white">About the Event</h1>
   <p class=" ml-10 mt-10 text-black-500 dark:text-black-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black-900 dark:first-letter:text-black-100 first-letter:me-3 first-letter:float-start">A musical journey of the golden era of Bollywood….the 90’s….where all of us witnessed a complete change-over of the music in the industry. Let’s get nostalgic yet again as we bring to you some select duets performed by the likes of Udit Narayan, Kumar Sanu, Alka Ragnik, Kavita Krishnamurthy and many more iconic singers of this musical era… with LIVE SAXOPHONE. Book your tickets now and get ready to be swept away by the melodies that have stood the test of time!</p>
   </div>

   <div style={{backgroundImage :`URL(${img})`}} className='h-5/6'>
       
        <div class="  text-white-500">
   <div class="">
    <h5 class=" pt-20 text-center text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white ">Vocalists</h5>
    <h1 class="text-left text-gray-500 dark:text-gray-400 m-20    text-lg text-gray-500 md:text-xl dark:text-gray-400  text-center mt-5 mb-20">Top Performers of the event</h1>
    <div class="flex ">
        <div>
        <img src="/Nilesh-Mate-Vocalist.png" class="h-44 w-44 ml-28"></img>
        <h5 class=" pt-5 ml-36 text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white ">Nilesh Mate</h5>
        </div>
        
        <div>
            <img src="/Jitendra-Abhyankar.png" class="h-44 w-44 ml-32"></img>
            <h5 class=" pt-5 ml-36 text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white ">Jitendra Abhyankar</h5>
        </div>
        <div>
            <img src="/Swarada-Godbole-Vocalist.png" class="h-44 w-44 ml-24"></img>
            <h5 class=" pt-5 ml-36 text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white ">Swarada
            Godbole</h5>
        </div>
        <div>
            <img src="/Kalyani-Deshpande.png" class="h-44 w-44 ml-28"></img>
            <h5 class=" pt-5 ml-36 text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white mb-10 ">Kalyani Deshpande</h5>
        </div>
        </div>
        <div class="">
        <img src="/Sonale-Sathe-Vocalist.png" class="h-44 w-44 ml-28"></img>
        <h5 class=" pt-5 ml-36 text-black-500 dark:text-black-400  text-4xl font-black text-black-900 dark:text-white  ">Sonale Sathe</h5>
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


<div class="bg-gray-100">
    <h1 class="pt-20 mb-20 text-center text-black-500 dark:text-black-400  text-6xl text-gray-900 dark:text-white" >Get Directions</h1>
    <div class="ml-5   ">	
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6826952877595!2d73.78445827519445!3d18.633336382482216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b6cca34641%3A0xd05a352540e8ca1a!2sRamkrishna%20More%20Natyagruha!5e0!3m2!1sen!2sin!4v1724949314316!5m2!1sen!2sin" width="1600" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
     </div>
</div>

   </div>

   <div class="ml-5  mt-10">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Terms and Conditions:</h1>
    <div class="ml=16 mt-10">
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

export default Episode
