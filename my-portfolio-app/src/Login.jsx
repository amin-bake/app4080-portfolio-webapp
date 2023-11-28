// src/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Userfront, { LoginForm } from '@userfront/toolkit/react';

Userfront.init('xbp4gx4b');

function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Navigate to the dashboard after a successful login
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onAuth={() => {}} onLogin={handleLoginSuccess} />
    </div>
  );
}

export default Login;
