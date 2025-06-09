import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import HomeButton from '../Home/HomeButton';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginData = { username, password };
      const response = await axios.post('http://localhost:3000/users/login', loginData);

      const { token } = response.data;
      localStorage.setItem('token', token);
      setMessage(`Welcome, ${username}!`);
      setIsSuccess(true);

      setTimeout(() => {
        navigate('/'); // Redirect after showing welcome message
      }, 1500);
    } catch (error) {
      setMessage('Invalid username or password.');
      setIsSuccess(false);
      console.error(error);
    }
  };

  return (
    <div>
      <HomeButton />
      <form id="loginform" onSubmit={handleLogin}>
        <h2>Login</h2>

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

        <button id="login" type="submit">Login</button>
        <button
          id="signup"
          type="button"
          onClick={() => navigate('/signup')}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
