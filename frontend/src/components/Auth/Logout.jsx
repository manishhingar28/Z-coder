import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import HomeButton from '../Home/HomeButton';
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token'); // Clear the JWT token
    navigate('/login'); // Redirect to login page
  }, [navigate]);

  return (
    <div>
              <HomeButton />
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
