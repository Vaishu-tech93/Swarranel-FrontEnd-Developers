import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Nav1() {
    const [searchVisible, setSearchVisible] = useState(false);
    const [showBorder, setShowBorder] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    }

    const handleClick = () => {
        setShowBorder(!showBorder);
    };

    return (
        <>
            
            <nav style={{ backgroundColor: 'white', opacity: 0.8 }} className="fixed w-full z-20 top-0 border-b border-white-200 h-24">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                    <img src="/swarraneel.png" className="h-24 w-30 ml-" alt="Logo" />

                    <div className="hidden w-full md:flex md:items-center justify-between ml-96">
                        

<ul className="flex flex-wrap flex-row md:space-x-8 p-z md:p-0 font-medium">
    <li
        onClick={handleClick}
        className={`inline-block p- cursor-pointer ${showBorder ? 'border border-dotted border-gray-500' : ''}`}
    >
        <Link to="/Home" className="block py-2 px-3 text-white bg-pink-700 md:bg-transparent md:text-pink-700 hover:border-indigo-700">
            Home
        </Link>
    </li>
    <li
        onClick={handleClick}
        className={`inline-block p- cursor-pointer ${showBorder ? 'border border-dotted border-gray-500' : ''}`}
    >
        <Link to="/About" className="block py-2 px-3 text-black hover:bg-white-100 md:hover:text-pink-700">
            About
        </Link>
    </li>
    <li
        onClick={handleClick}
        className={`inline-block p- cursor-pointer ${showBorder ? 'border border-dotted border-gray-500' : ''}`}
    >
        <Link to="/ElilteMembership" className="block py-2 px-3 text-black hover:bg-white-100 md:hover:text-pink-700">
            Elite Membership
        </Link>
    </li>
    <li
        onClick={handleClick}
        className={`inline-block p- cursor-pointer ${showBorder ? 'border border-dotted border-gray-500' : ''}`}
    >
        <Link to="/ContactUs" className="block py-2 px-3 text-black hover:bg-white-100 md:hover:text-pink-700">
            Contact Us
        </Link>
    </li>
</ul>
                    </div>

                    <div className="relative pl-">
                        <button onClick={toggleSearch} className="p-2 border border-white-300 sqaure-full hover:bg-white-200">
                            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeLinejoin="square" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1117.25 10a7.5 7.5 0 01-3.3 6.1z" />
                            </svg>
                        </button>

                        {searchVisible && (
                            <div className="absolute right-0 w-96 mt-2  pt-4">
                                <input
                                    type="text"
                                    className="w-full p-2 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500"
                                    placeholder="Search..."
                                />
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav1;
