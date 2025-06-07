import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import HomeButton from '../Home/HomeButton';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/signup', { username, password });
      setSuccessMessage('Signup successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login'); // Redirect to the login page
      }, 2000); // 2-second delay to show the success message
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        setSuccessMessage('User already exists');
      } else {
        setSuccessMessage('Signup failed. Please try again.');
      }
    }
  };

  return (
    <>
      <HomeButton />
      <div>
        <form onSubmit={handleSignup}>
          <h2>Sign up</h2>
          {successMessage && alert('Successfuly signed in')}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
