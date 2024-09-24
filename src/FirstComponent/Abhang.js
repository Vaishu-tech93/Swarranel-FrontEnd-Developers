
import React from 'react';
import img from '../FirstComponent/black-image.jpg';

function Abhang() {
  return (
    <>
      <div>
        {/* Main Section with Background Image */}
        <div className="mt-24">
          <div style={{ backgroundImage: `URL(${img})` }} className="bg-cover bg-center">
            <div className="flex flex-col md:flex-row">
              <img
                src="/ABHANG-264-X-440.webp"
                className="mx-auto md:ml-64 mt-10 w-72 md:w-96 mb-10 md:mb-20 pt-10"
                alt="Abhang Event"
              />
              <div className="md:mt-44 mt-10 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white md:ml-44">ABHANG</h1>
                <br />
                <p className="text-xl md:text-2xl text-white md:ml-44">Musical Shows | Ticket Rate – 400 / 300 / 200</p>
                <br />
                <p className="text-xl md:text-2xl text-white md:ml-44">Date: June 24th | Time – 06:30 PM</p>
                <br />
                <p className="text-xl md:text-2xl text-white md:ml-44">Vocals: मा. अजित कडकडे</p>
                <br />
                <p className="text-xl md:text-2xl text-white md:ml-44">
                  मराठी भक्ती संगीतात ज्यांनी स्वतःच्या अनोख्या गायन शैलीने अनेक विक्रम प्रस्थापित केले आहेत अशा मा. अजित
                  कडकडे यांना ऐकण्याची सुवर्णसंधी !!
                </p>
                <br />
                <p className="text-xl md:text-2xl text-white md:ml-44">
                  मा. अजित कडकडे यांच्या सुरात न्हाऊन निघालेल्या अभंगातून, ईश्वर भक्तीमध्ये लीन होण्याची आपणा सर्वांची
                  ईच्छा पुर्णत्वास जाणार!!
                </p>
                <button
                  type="button"
                  className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 mb-10 md:mb-20 md:ml-44 mx-auto md:w-40 w-full h-14"
                >
                  SOLD OUT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Information */}
        <div className="mt-20 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white ml-4 md:ml-12">ABHANG</h1>
          <p className="ml-4 md:ml-10 text-xl text-gray-900 dark:text-white mt-4 md:mt-12">
            DATE: SATURDAY, 24th June | TIME – 06:30 PM | TICKET RATE – RS 400, 300 & 200
          </p>
        </div>

        {/* About the Event Section */}
        <div className="mt-20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white ml-4 md:ml-12">About the Event</h1>
          <p className="ml-4 md:ml-12 mt-10 text-xl md:text-2xl text-gray-900 dark:text-gray-400">
            मराठी भक्ती संगीतात ज्यांनी स्वतःच्या अनोख्या गायन शैलीने अनेक विक्रम प्रस्थापित केले आहेत अशा मा. अजित
            कडकडे यांना ऐकण्याची सुवर्णसंधी !!
          </p>
          <p className="ml-4 md:ml-12 mt-4">
            मा. अजित कडकडे यांच्या सुरात न्हाऊन निघालेल्या अभंगातून, ईश्वर भक्तीमध्ये लीन होण्याची आपणा सर्वांची
            ईच्छा पुर्णत्वास जाणार!!
          </p>
        </div>

        {/* Vocalists Section */}
        <div className="mt-20 text-center">
          <h5 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Vocalists</h5>
          <h1 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-5 mb-10">
            Top Performers of the event
          </h1>
          <div className="flex flex-wrap justify-center">
            {[
              { name: 'Nilesh Mate', imgSrc: '/Nilesh-Mate-Vocalist.png' },
              { name: 'Jitendra Abhyankar', imgSrc: '/Jitendra-Abhyankar.png' },
              { name: 'Swarada Godbole', imgSrc: '/Swarada-Godbole-Vocalist.png' },
              { name: 'Ketaki Menon', imgSrc: '/Ketaki-Menon.png' },
            ].map((vocalist, index) => (
              <div key={index} className="m-20">
                <img src={vocalist.imgSrc} alt={vocalist.name} className="h-28 w-28 mx-auto" />
                <h5 className="pt-5 text-xl font-black text-gray-900 dark:text-white">{vocalist.name}</h5>
              </div>
            ))}
          </div>
        </div>

        {/* Venue Section */}
        <div className="mt-20">
          <h1 className="ml-4 md:ml-20 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Venue</h1>
          <p className="text-2xl text-gray-900 dark:text-white ml-4 md:ml-20 pt-5 mt-10">Ramkrishna More Auditorium</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <p className="text-gray-500 dark:text-gray-400 ml-4 md:ml-20">
              Ramkrishna More Prekshagriha in Chinchwad, Pune is known to satisfactorily cater to the demands of its
              customer base. It came into existence in 1994 and has, since then, been a known name in its field. It stands
              located at Ramkrishna More Prekshagriha is a prominent landmark in the area.
            </p>
            <img
              src="/ramkrishna-more-natyagruha-pimpri-chinchwad-pune.jpg"
              className="mb-10 pl-20 h-64 md:h-96 mx-auto item-center"
              alt="Ramkrishna More Auditorium"
            />
          </div>
        </div>

        {/* Directions Section */}
        <div className="bg-gray-100 mt-20">
          <h1 className="text-center text-4xl md:text-6xl text-gray-900 dark:text-white pt-20 mb-20">Get Directions</h1>
          <div className="ml-5">
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
        <div className="ml-5 mt-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Terms and Conditions:</h1>
          <div className="ml-4 mt-10 text-lg md:text-xl">
            <p>1. Age Limit: Open to all</p>
            <br />
            <p>2. Internet handling fee per ticket may be levied. Please check your total amount before payment.</p>
            <br />
            <p>3. Tickets once booked cannot be exchanged or refunded.</p>
            <br />
            <p>4. We recommend that you arrive at least 20 minutes prior at the venue.</p>
            <br />
            <p>5. No Entry without Ticket / Passes</p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Abhang;
