import React, { useState } from 'react';
import './Seats.css'

function Seats() {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const movies = [
    { value: 10, label: 'Avengers: Endgame ($10)' },
    { value: 12, label: 'Joker ($12)' },
    { value: 8, label: 'Toy Story 4 ($8)' },
    { value: 9, label: 'The Lion King ($9)' },
  ];

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const calculateTotalPrice = () => {
    const price = movies.find((movie) => movie.value === selectedMovie).value;
    setTotalPrice(price * selectedSeats.length);
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h2 className="text-lg font-bold mb-4">Movie Seat Booking</h2>
      <div className="movie-container mb-4">
        <label>Pick a movie:</label>
        <select
          value={selectedMovie}
          onChange={handleMovieChange}
          className="block w-full p-2 pl-10 text-sm text-gray-700"
        >
          {movies.map((movie) => (
            <option key={movie.value} value={movie.value}>
              {movie.label}
            </option>
          ))}
        </select>


        <img src="/swarraneel.png" className="h-24 w-30 ml-" alt="Logo" />

      </div>
      <ul className="showcase flex mb-4">
        <li className="mr-4">
          <div className="seat bg-gray-400"></div>
          <small>N/A</small>
        </li>
        <li className="mr-4">
          <div className="seat bg-green-500"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat bg-red-500"></div>
          <small>Occupied</small>
        </li>
      </ul>
      <div className="flex">
      <div className="container mb-4">
        <div className="screen bg-gray-400 mb-4"></div>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="row flex mb-2">
            {Array.from({ length: 6 }, (_, j) => (
              <div
                key={j}
                className={`seat ${selectedSeats.includes(`${i}-${j}`) ? 'bg-green-500' : 'bg-gray-400'}`}
                onClick={() => handleSeatClick(`${i}-${j}`)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="container mb-4">
        <div className="screen bg-gray-400 mb-4"></div>
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="row flex mb-2">
            {Array.from({ length: 12 }, (_, j) => (
              <div
                key={j}
                className={`seat ${selectedSeats.includes(`${i}-${j}`) ? 'bg-green-500' : 'bg-gray-400'}`}
                onClick={() => handleSeatClick(`${i}-${j}`)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="container mb-4">
        <div className="screen bg-gray-400 mb-4"></div>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="row flex mb-2">
            {Array.from({ length: 6 }, (_, j) => (
              <div
                key={j}
                className={`seat ${selectedSeats.includes(`${i}-${j}`) ? 'bg-green-500' : 'bg-gray-400'}`}
                onClick={() => handleSeatClick(`${i}-${j}`)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      </div>
     <button className="bg-pink-600 ml-96 rounded-full">
     <p className="text-lg font-bold mb-4 text-white p-2">
        You have selected <span className="text-white">{selectedSeats.length}</span> seats for a price of{' '}
        <span className="text-white">${totalPrice}</span>
      </p>
     </button>
    </div>
  );
}

export default Seats;