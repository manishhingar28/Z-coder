import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import HomeButton from '../Home/HomeButton';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/signup', {
        username,
        password,
      });

      // Success (e.g., 201 Created)
      setMessage(response.data.message || 'Signup successful!');
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      // Backend sent an expected error (e.g., 400)
      if (error.response) {
        setMessage(error.response.data.message || 'Signup failed.');
        setIsSuccess(false);
      } else {
        // Unexpected error (network, etc.)
        setMessage('Network or server error.');
        setIsSuccess(false);
      }
    }
  };

  return (
    <>
      <HomeButton />
      <div>
        <form onSubmit={handleSignup}>
          <h2>Sign up</h2>
          {message && (
            <p style={{ color: isSuccess ? 'green' : 'red' }}>{message}</p>
          )}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
