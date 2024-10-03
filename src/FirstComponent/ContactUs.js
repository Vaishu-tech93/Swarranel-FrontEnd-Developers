import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const [formErrors, setFormErrors] = useState({});
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.subject) errors.subject = 'Subject is required';
        if (!formData.message) errors.message = 'Message is required';
        return errors;
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    // handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
          // Make a POST request to your backend API
          const response = await axios.post('http://192.168.1.71:5000/User', formData);
          console.log(response);
          if(response.status === 200){
             alert(response.data.message);
          }
        
          
      } catch (error) {
          console.error('There was an error submitting the form!', error);
      }
  };

  return (
    <>
      <div className="bg-gray-100 mt-24 flex flex-col lg:flex-row lg:justify-center">   
        <form 
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-4 mt-10 w-full lg:w-2/3"
          onSubmit={handleSubmit} 
        >
          <div className="mb-4">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white">Contact Us</h2>
            <br />
            <br />
            <label className="block text-gray-700 mb-2" htmlFor="name">Your Name (required)</label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline dark:border-gray-400 bg-gray-50 dark:bg-black-700 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500 h-12" 
              id="name" 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleChange}
            />
            {formErrors.name && <p className="text-red-500 text-xs italic">{formErrors.name}</p>}
            <br />
          </div><br></br>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="email">Your Email (required)</label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline dark:border-gray-400 bg-gray-50 dark:bg-black-700 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500 h-12" 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange}
            />
            {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
          </div>
          <br />
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline dark:border-gray-400 bg-gray-50 dark:bg-black-700 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500 h-12" 
              id="subject" 
              name="subject" 
              type="text" 
              value={formData.subject} 
              onChange={handleChange}
            />
            {formErrors.subject && <p className="text-red-500 text-xs italic">{formErrors.subject}</p>}
          </div>
          <br />
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="10" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline dark:border-gray-400 bg-gray-50 dark:bg-black-700 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500 h-48" 
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
            {formErrors.message && <p className="text-red-500 text-xs italic">{formErrors.message}</p>}
          </div>
          <br />
          <br />
          <button 
            type="submit" // Change to 'submit' to trigger the form submit event
            className="text-white bg-pink-700 hover:bg-pink-300 focus:ring-4  font-medium text-sm px-5 py-2.5 mb-2 w-full lg:w-auto"
          >
            Submit
          </button>
{isSubmitted && (
    <div>
        <p>Form submitted successfully!</p>
    </div>
)}
        </form>

        <div className="mt-10 lg:ml-10 lg:mt-20 lg:w-1/3 mx-4 mr-10">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h1 className="text-2xl md:text-4xl text-gray-900 dark:text-white text-center">VISIT US</h1>
            <br />
            <section>
              <div className="w-full h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30252.51183889865!2d73.78206393837242!3d18.593686106869892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91b0dd95daf%3A0xa6cb6e3796a09978!2sPimple%20Saudagar%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724949543027!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mr-10 ">
            <h1 className="text-2xl md:text-4xl text-gray-900 dark:text-white text-center">OUR ADDRESS</h1>
            <br />
            <div className="flex items-center mb-4">
              <svg className="h-6 w-6 text-gray-700 dark:text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <circle cx="12" cy="11" r="3" />  
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z " />
              </svg>
              <p>
                <Link to="http://localhost:3000/ContactUs" className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700 ml-5 mt-5">
                  Themefreesia, ABC building, 5<sup>th</sup> floor, Zyz street 
                </Link>
              </p>
            </div>
            <div className="flex items-center mb-4 mt-5">
              <svg className="h-6 w-6 mt-3 text-gray-700 dark:text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              <p>
                <Link to="https://outlook.live.com/mail/0/" className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700 ml-5 ">
                  (123) 456-7890 
                </Link>
              </p>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mt-3 text-gray-700 dark:text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.036 8.278l9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              <p>
                <Link to="https://outlook.live.com/mail/0/" className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700 ml-5 mt-5">
                  support@support.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;


