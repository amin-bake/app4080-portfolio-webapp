// src/Signup.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Userfront, { SignupForm } from '@userfront/toolkit/react';

Userfront.init('xbp4gx4b');

function Signup() {
  const navigate = useNavigate();

  const handleSignupSuccess = () => {
    // Navigate to the dashboard after a successful signup
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Signup</h1>
      <SignupForm onAuth={() => {}} onSignup={handleSignupSuccess} />
    </div>
  );
}

export default Signup;
