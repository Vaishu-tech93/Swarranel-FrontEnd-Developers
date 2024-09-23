


import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Nav1() {
    const [searchVisible, setSearchVisible] = useState(false);
    const [showBorder, setShowBorder] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false); // For mobile navigation toggle

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const handleClick = () => {
        setShowBorder(!showBorder);
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <nav style={{ backgroundColor: 'white', opacity: 0.8 }} className="fixed w-full z-20 top-0 border-b border-white-200 h-24">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8">
                    {/* Logo */}
                    <img src="/swarraneel.png" className="h-16 w-32 md:h-24 md:w-24" alt="Logo" />

                    {/* Mobile menu button */}
                    <button onClick={toggleMenu} className="block md:hidden p-2 text-pink-700 hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>

                    {/* Main menu for larger screens */}
                    <div className={`hidden md:flex md:items-center justify-between ml-20 ${menuVisible ? 'block' : ''}`}>
                        <ul className="flex flex-col md:flex-row md:space-x-8 font-medium">
                            <li onClick={handleClick} className={`inline-block p-2 cursor-pointer ${showBorder ? 'border border-dotted border-gray-500' : ''}`}>
                                <Link to="/Home" className="block py-2 px-3 text-pink-700 hover:border-indigo-700">Home</Link>
                            </li>
                            <li onClick={handleClick} className={`inline-block p-2 cursor-pointer ${showBorder ? 'border border-dotted border-gray-500' : ''}`}>
                                <Link to="/About" className="block py-2 px-3 text-black hover:text-pink-700">About</Link>
                            </li>
                            <li onClick={handleClick} className={`inline-block p-2 cursor-pointer ${showBorder ? 'border border-dotted border-gray-500' : ''}`}>
                                <Link to="/ElilteMembership" className="block py-2 px-3 text-black hover:text-pink-700">Elite Membership</Link>
                            </li>
                            <li onClick={handleClick} className={`inline-block p-2 cursor-pointer ${showBorder ? 'border border-dotted border-gray-500' : ''}`}>
                                <Link to="/ContactUs" className="block py-2 px-3 text-black hover:text-pink-700">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu */}
                    {menuVisible && (
                        <div className="absolute top-24 left-0 w-full bg-white md:hidden">
                            <ul className="flex flex-col space-y-2 p-4 text-center">
                                <li><Link to="/Home" className="block py-2 text-pink-700">Home</Link></li>
                                <li><Link to="/About" className="block py-2 text-black hover:text-pink-700">About</Link></li>
                                <li><Link to="/ElilteMembership" className="block py-2 text-black hover:text-pink-700">Elite Membership</Link></li>
                                <li><Link to="/ContactUs" className="block py-2 text-black hover:text-pink-700">Contact Us</Link></li>
                            </ul>
                        </div>
                    )}

                    {/* Search Button */}
                    <div className="relative ml-4">
                        <button onClick={toggleSearch} className="p-2 border border-gray-300 hover:bg-gray-200">
                            {searchVisible ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="square" strokeLinejoin="square" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197M16 16A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            )}
                        </button>

                        {/* Search Input */}
                        {searchVisible && (
                            <div className="absolute right-0 w-72 mt-2">
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
