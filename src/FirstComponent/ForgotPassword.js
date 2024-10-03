import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Step 1 for entering mobile/email, Step 2 for OTP verification
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timer, setTimer] = useState(30); // 30 seconds timer
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  // Function to send OTP
  const sendOtp = () => {
    if (contact) {
      const generated = Math.floor(1000 + Math.random() * 9000).toString(); // Generate 4-digit OTP
      setGeneratedOtp(generated);
      console.log("Generated OTP: ", generated);
      setOtpSent(true);
      setStep(2); // Move to OTP verification step
      setTimer(30); // Reset timer to 30 seconds
    } else {
      alert("Please enter your email or mobile number.");
    }
  };

  // Timer countdown
  useEffect(() => {
    let interval;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      alert("OTP has expired. Please resend the OTP.");
      setStep(1);
      setOtpSent(false);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  // Handle OTP submission
  const handleOtpSubmit = () => {
    if (otp === generatedOtp) {
      alert("OTP verified!");
      navigate("/signup"); // Navigate to signup page
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        {step === 1 ? (
          <>
            <h2 className="text-4xl font-semibold text-center mb-6">Forgot Password</h2><br></br>
            <label>Enter Email / Mobile no</label>
            <input         
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter Email or Mobile No"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <button
              onClick={sendOtp}
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
            >
              Send OTP
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm">
                Remembered your password?{' '}
                <Link to="/SignUp" className="text-blue-500">
                  SignUp
                </Link>
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">Enter OTP</h2>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {/* Timer moved below OTP input */}
            <p className="text-center text-gray-600 mb-4">
              You have {timer} seconds left.
            </p>
            <button
              onClick={handleOtpSubmit}
              className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
            >
              Verify OTP
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm">
                Remembered your password?{' '}
                <Link to="/SignUp" className="text-blue-500">
                  SignUp
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;







