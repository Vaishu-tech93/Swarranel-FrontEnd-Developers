

import React from 'react'
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <>
      <div class="bg-gray-100 mt-20 flex ">

        


        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-10  mt-20  w-2/3" >
          <div class="mb-4 mt-5">

            <h2 class="text-4xl font-black text-gray-900 dark:text-white">Contact Us</h2><br></br>
            <label class="block text-gray-700   mb-2" for="username">
              Your Name (required)
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline  dark:border-gray-400 bg-gray-50    

            bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500 h-16 " id="username" type="text" /><br></br>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700   mb-2" for="password">

              Your Email (required)
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline  dark:border-gray-400 bg-gray-50    

            bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500 h-16" id="username" type="text" />

          </div>

          <div class="mb-6">
            <label class="block text-gray-700   mb-2" for="password">Subject
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline  dark:border-gray-400 bg-gray-50    

            bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500 h-16" id="username" type="text" />

          </div>

          <div>
            <label class="block text-gray-700   mb-2" for="password">Your Message
            </label>
            <textarea id="message" rows="10" class="
            shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline  dark:border-gray-400 bg-gray-50 h-64   

            bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500" ></textarea>
          </div><br></br>

          <button type="button" class="text-white bg-pink-700 hover:bg-pink-300 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bgpinke-600 dark:hover:bg-pink-500 focus:outline-none dark:focus:ring-pink-300">submit</button>

          
        </form>

        <div class="">
          <div class=" mt-20 bg-white h-100 w-96   dark:border-gray-400  ml-12 ">

          <div class="bg-white  ml-5 mr-20  ">
    <h1 class="ml-5 mt=10 text-4xl text-gray-900 dark:text-white">VISIT US</h1><br></br>
     <section>
 	<div class="ml-5  mb-5 w-400 h-300">	
     {/* <iframe src="https://www.google.com/maps/embed?..."  ></iframe> */}
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30252.51183889865!2d73.78206393837242!3d18.593686106869892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91b0dd95daf%3A0xa6cb6e3796a09978!2sPimple%20Saudagar%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724949543027!5m2!1sen!2sin" width="300" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
 		</section>
 </div>
</div>
          <br></br>




          <div class=" mt-4 bg-white h-80  dark:border-gray-400 ml-16">
            <h1 class="ml-4 mt-10 text-4xl text-gray-900 dark:text-white">OUR ADDRESS</h1><br></br>
            

            <div class="flex">
        

<svg class="h-7 w-5 text-black-500"  width="" height="" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
  <path stroke="none" d="M0 0h24v24H0z"/>  
  <circle cx="12" cy="11" r="3" />  
  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z " />
</svg>


<p> <Link to="http://localhost:3000/ContactUs" class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700 ml-5 mt=5">
Themefreesia,ABC building,5<sup>th</sup>floor,Zyz street </Link></p>
 </div><br></br>

  <div class="flex">
  <svg class="h-5 w-5 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
       <p> <Link to="https://outlook.live.com/mail/0/" class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700 ml-5 mt=5">
        (123)456-7890 </Link></p>
 </div><br></br>

    
<div class="flex">
<button type="button" class="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 rounded-lg text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
<svg class="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>

</button>
<p> <Link to="https://outlook.live.com/mail/0/" class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700 ml- mt=5">
support@support.com</Link></p> </div>








    <div>
        <p> <Link to="https://outlook.live.com/mail/0/" class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700 ml-5 mt=5">
       themefreesia</Link></p>
 </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
export default Contact
