import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import axios from 'axios';

function SignUp() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrorMessage(''); 
  };

  const validateForm = () => {
    const { email, password } = data;
    if (!email || !password) {
      return 'All fields are required!';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Email format is invalid!';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long!';
    }
    return null; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state

    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      setLoading(false); // End loading state
      return;
    }

    try {
     
      const response = await axios.post('http://192.168.1.17:5000/User', data); 
      console.log('Login response:', response.data);
      if (response.data.success) {
        setIsSubmitted(true); 
        setErrorMessage(''); 
        setTimeout(() => {
          navigate('/seats'); 
        }, 1500); 
      } else {
        setErrorMessage(response.data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false); 
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10 bg-gray-100 px-4">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-4xl font-semibold mb-4 text-center">Login</h2>

        {errorMessage && <p className="text-red-500 text-sm mb-2 text-center">{errorMessage}</p>}
        {isSubmitted && <p className="text-green-500 text-sm mb-2 text-center">Login successful! Redirecting...</p>}
        
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Password */}
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
            className="absolute inset-y-0 right-3 top-9 cursor-pointer text-xl"
          >
            {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white p-2 rounded-md w-full "
        >
          Login
        </button>
        {isSubmitted && (
     <div>         
        <p>Login successfully!</p>
     </div>
 )}

        {/* Forgot Password and Register Links */}
        <div className="mt-4 text-center">
          <Link to="/ForgotPassword" className="text-blue-500 text-sm">
            Forgot your password?
          </Link>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500">
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;