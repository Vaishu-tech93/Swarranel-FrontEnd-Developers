import React from 'react'
import { Link } from 'react-router-dom'
import SihayiSe from '../fourthComponent/SihayiSe';
import img from '../FirstComponent/footer-img.jpg';
import Episode from '../secondComponent/Episode';
import Abhang from '../secondComponent/Abhang';
import Seat from '../fourthComponent/Seat';
function Footer() {
  return (
    <>   
   <footer style={{backgroundImage :`URL(${img})`}} className='h-5/6'>
<div class= " flex text-white ">
 <div class=" ml-12 mt-4 w-96 ">    
<img src="/Swarraneel.png"  class="h-64 w-68 mt-8  ml-10"></img><br></br>
<p class="mb- text-white-500 dark:text-white-400 ml-10 text-xl ">Swarraneel Entertainments is committed to bring performing as well as non-performing arts to life by bringing quality events to the art lovers like Musical Shows, Art Exhibitions, Professional Drama Shows, Book Publications and other such arts.</p> <br></br> <br></br> <br></br> <br></br>
</div>
<div class=" ml-20 mt-20 text-xl w-64">
    <h3 class="text-3xl text-white-900 dark:text-white">Quick Connect</h3><br></br>
        <p class="mt-4"><Link to="http://localhost:3000/Home" class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">
        Pimple Saudagar,Pune 411027,MH,IN</Link></p> <br></br>
        <p><Link to="https://www.swarraneel.in/membership/#" class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700 mt-4">(7522)955-281</Link></p><br></br>
       <p> <Link to="https://outlook.live.com/mail/0/" class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700 mt-4">
        Nilesh@swarraneel.in</Link></p>
</div>
<div class=" mt-24 ml-12 text-xl ">
<h1 class="text-3xl text-white-900 dark:text-white">Recent Posts</h1><br></br><br></br>
<p>
        <Link to="/SihayiSe" class="block py-2 px-3 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">Sahir ki sihayi se</Link></p>
<p>February 6, 2024</p><br></br>
<p>
        <Link to="/Episode" class="block py-2 px-3 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">Nostalgic 90's episode-3</Link>
</p>
<p>January 10, 2024</p><br></br>
<p> <Link to="/Abhang" class="block py-2 px-3 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">ABHANG-Musical Event</Link></p>
<p>June 15, 2023</p>
</div>
<div>
<img src='./1.jpg' height="300px"width="300px" class=" mr-12 ml-32 mt-24 w-96 "></img>
</div>
</div>
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-0">
        <Link to="http://localhost:3000/Home" class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">Swarraneel Entertainment</Link >| Desiged by: <Link to="https://sameerdigital.com/" class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">sameer digital</Link>.|<Link to="https://happyapes.com/" class="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700" >Happy Apes</Link> @ copyright All Rights Reserved.</span>
    </div>
   </footer>
    </>
  );
}


export default Footer
