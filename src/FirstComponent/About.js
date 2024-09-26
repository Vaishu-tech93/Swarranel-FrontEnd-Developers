import React from 'react'
import img from '../FirstComponent/b22.jpg';
function About() {
  return (
    <>
   <div style={{ backgroundImage: `URL(${img})` }} className='h-5/6 bg-cover bg-center'>
  <div className="mt-20">
    <div className="flex flex-col md:flex-row items-start">
      <h1 className="uppercase mt-10 md:mt-40 md:ml-60 mr-4 text-4xl font-extrabold text-black-900 dark:text-white">
        A B O U T U S
      </h1>
      <p className="mt-10 md:mt-44 mb-10 md:mb-44 mx-4 text-lg text-gray-900 dark:text-white tracking-tight dark:text-gray-400">
        Founded in 2016, Swarraneel Entertainments is a brainchild of Nilesh Mate, a passionate singer,
        who believes in “Hidden Talent Existence” in your immediate neighborhood. Swarraneel Entertainments
        is committed to bringing performing as well as non-performing arts to life by hosting quality events
        for art lovers, such as Musical Shows, Art Exhibitions, Professional Drama Shows, Book Publications,
        and other artistic endeavors. While arranging professional events, Swarraneel also focuses on showcasing
        fresh talent by providing opportunities for them to present their skills to the best of their potential.
        <br /><br />
        Swarraneel has produced many high-quality musical events like Melodious Duo Series, Bappi Lahiri Special,
        Magical Pacham, Melody Queens, Timeless Gulzar, Marathi Special, Colorbuds—an art exhibition showcasing
        works by artists aged up to 18 years, Book Launch of poems by Mrs. Paresha Jogalekar-Paranjape, and many
        more such events. They are continually working on producing breathtaking events.
        <br /><br />
        For any show inquiries or event management proposals, please feel free to send us an email at{" "}
        <a href="https://outlook.live.com/mail/0/">
          <span className="text-red-600">nilesh@swarraneel.in</span>
        </a> or connect with us at +91-7522955281.
      </p>
    </div>
  </div>
</div>

<div className="bg-gray-200">
  <div className="text-center mb-1 mt-20">
    <h1 className="uppercase text-4xl md:text-6xl text-gray-900 dark:text-white mt-10 pt-10">
      EVENTS SO FAR
    </h1>
    <p className="text-gray-500 dark:text-gray-400 mt-10 mb-5">Take a peek inside our Wonderworld</p>
  </div>
  <div className="flex flex-col md:flex-row justify-center mx-4 mt-5">
    <img src="/2.webp" className="w-100 md:w-auto md:mr-4 mb-4 md:mb-0 h-50" alt="Event 1" />
    <img src="/111.webp" className="w-100 md:w-100 h-50" alt="Event 2" />
  </div>
  <div className="flex flex-col md:flex-row justify-center mx-4 mt-5">
    <img src="/4.webp" className="w-100 md:w-100 md:mr-4 mb-4 md:mb-0 h-50" alt="Event 3" />
    <img src="/3.webp" className="w-100 md:w-100 h-50" alt="Event 4" />
  </div>
</div>

  
    
    </> 
  )
}

export default About

