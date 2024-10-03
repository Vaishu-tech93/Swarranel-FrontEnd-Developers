

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for routing
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Importing icons for password visibility toggle
import axios from 'axios'; // Importing axios for API requests

function Register() {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactno: '',
    city: '',
    identificationType: '',
    identificationNumber: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [identificationError, setIdentificationError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // Reset errors when user types
    if (name === 'email') setEmailError('');
    if (name === 'confirmPassword') setPasswordError('');
    if (name === 'identificationNumber') setIdentificationError('');
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Make a POST request to your backend API
//       const response = await axios.post('http://192.168.1.71:5000/User', data);
//       console.log(response);
//       if (response.status === 200) {
//         alert("Registration successful");
//         navigate('/signup');
//       }
//     } catch (error) {
//       console.error('There was an error submitting the form!', error);
//       alert('There was an error submitting the form. Please try again.');
//     }
//   };

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      const response = await axios.post('http://192.168.1.71:5000/User', data);
      console.log(response);
      if (response.status === 200) {
        alert("Registration successful");
        navigate('/login'); // Navigate to the login page after successful registration
      }
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="flex flex-col mt-24 items-center justify-center min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-4xl font-semibold text-center mb-4">Register</h2>

        {/* First Name */}
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className={`block w-full border rounded-md p-2 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        {/* Password field */}
        <div className="mt-4 relative">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            value={data.password}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 top-9 cursor-pointer text-xl">
            {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>

        {/* Confirm Password field */}
        <div className="mt-4 relative">
          <label className="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            type={confirmPasswordVisible ? 'text' : 'password'}
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
          <span
            onClick={toggleConfirmPasswordVisibility}
            className="absolute inset-y-0 right-3 top-9 cursor-pointer text-xl">
            {confirmPasswordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>

        {/* Contact Number */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Contact No.</label>
          <input
            type="tel"
            name="contactno"
            value={data.contactno}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* City */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Identification Type Dropdown */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Identification Type</label>
          <select
            name="identificationType"
            value={data.identificationType}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Select Identification Type</option>
            <option value="Aadhar Card">Aadhar Card</option>
            <option value="Pan Card">Pan Card</option>
          </select>
        </div>

        {/* Identification Number Input */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Identification Number</label>
          <input
            type="text"
            name="identificationNumber"
            value={data.identificationNumber}
            onChange={handleChange}
            className={`block w-full border rounded-md p-2 ${identificationError ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {identificationError && <p className="text-red-500 text-sm">{identificationError}</p>}
        </div>

        <button type="submit" className="mt-6 bg-blue-600 text-white p-2 rounded-md w-full">
          Register
        </button>
        {isSubmitted && (
    <div>
        <p>Form submitted successfully!</p>
    </div>
)}
      </form>
    </div>
  );
}

export default Register;
