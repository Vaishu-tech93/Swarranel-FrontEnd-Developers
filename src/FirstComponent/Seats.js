import React, { useState } from 'react';
import { FaChair } from 'react-icons/fa';
import img from '../FirstComponent/Vertical-Banner.jpg';

const seats = Array(60).fill(false); 

const MovieSeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (index) => {
    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== index));
    } else {
      setSelectedSeats([...selectedSeats, index]);
    }
  };

  const calculateTotal = () => selectedSeats.length * 20; // Assuming each seat costs $10

  return (
  
     <div className="max-w-2xl mx-auto p-6">
      {/* Movie Card */}
      <div className="bg-gray-800 text-white p-4 rounded-md mb-6 mt-28 flex">
        <img 
          src={img} 
          alt="Movie Poster" 
          className="w-24 h-36 rounded-md mr-4"
        />
        <div>
          <h2 className="text-lg font-bold">Shahir Ke Sihayi Se</h2>
          <p className="text-sm">Vocals: Nilesh Mate, Jitendra Abhyankar, Swapnaja Lele, Bhagyashree Abhyankar.</p>
          <p className="text-sm">Date: SUNDAY, 25TH FEB | Time – 06:00 PM | Ticket rate – Rs 300 & 200</p>
          <p className="text-sm">Duration: 120 mins</p>
        </div>
      </div>

      {/* Seats Layout */}
      <div className="grid grid-cols-5 gap-4 mb-4">
        {seats.map((isBooked, index) => (
          <div
            key={index}
            onClick={() => toggleSeat(index)}
            className={`flex justify-center items-center cursor-pointer ${isBooked ? 'text-gray-400' : selectedSeats.includes(index) ? 'text-green-500' : 'text-gray-700'}`}
          >
            <FaChair className="text-3xl" />
          </div>
        ))}
      </div>
 {/* Booking Summary */}
 <div className="mt-4">
        <h3 className="text-lg font-bold">Selected Seats:</h3>
        <p className="text-gray-600">{selectedSeats.length === 0 ? "No seats selected" : selectedSeats.join(", ")}</p>
        <h4 className="text-lg font-bold mt-2">Total: ${calculateTotal()}</h4>
      </div>

    {/* Button to Confirm Booking */}
      <button
        onClick={() => alert(`Selected Seats: ${selectedSeats.length === 0 ? "No seats selected" : selectedSeats.join(", ")}\nTotal: $${calculateTotal()}`)}
        className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default MovieSeatBooking;
