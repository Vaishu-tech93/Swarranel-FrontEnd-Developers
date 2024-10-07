import React from 'react';
import { Link } from 'react-router-dom';
import Seats from '../FirstComponent/Seats'

const Theater = () => {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  const theaters = [
    { name: "The Grand Cinema", location: "123 Main St", showtimes: ["1:00 PM", "4:00 PM", "7:00 PM"] },
    { name: "Silver Screen Theater", location: "456 Elm St", showtimes: ["2:00 PM", "5:00 PM", "8:00 PM"] },
    { name: "Regal Movie House", location: "789 Oak St", showtimes: ["12:30 PM", "3:30 PM", "6:30 PM"] },
    { name: "Starlight Cinemas", location: "101 Pine St", showtimes: ["1:45 PM", "4:45 PM", "7:45 PM"] },
    { name: "Epic Movieplex", location: "202 Maple St", showtimes: ["2:15 PM", "5:15 PM", "8:15 PM"] },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-center mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{formattedDate}</h2>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center mb-4">🎭 Movie Showtimes</h1>

      <div className="grid grid-cols-1 gap-4">
        {theaters.map((theater, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{theater.name}</h3>
              <div className="flex items-center mt-1 text-gray-600">
                <svg
                  className="w-4 h-4 mr-1 text-pink-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2c-6.627 0-12 5.373-12 12a12 12 0 0023.999.001C24 7.373 18.627 2 12 2z" />
                </svg>
                <span>{theater.location}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              {theater.showtimes.map((time, idx) => (
              

              <Link to="/Seats"><button
              key={idx}
              className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-600 transition"
            >
              {time}
            </button></Link>
                
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theater;
