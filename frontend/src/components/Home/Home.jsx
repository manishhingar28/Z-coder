import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from './HomeButton';
import './Home.css';
import Login from '../Auth/Login';

const Home = () => {
  const navigate = useNavigate();
  const loggedin = !!localStorage.getItem('token');

  return (
    <>
      <HomeButton />
      <div className='Home'>
        <h1>Welcome To Zcoder</h1>
        <p> Create and manage contest calendars for top coding platforms like <a href="https://www.leetcode.com/"> LeetCode </a>, <a href="https://codeforces.com/"> codeforces </a>, and <a href="https://www.codechef.com/"> CodeChef </a>. <br/>
              Stay updated with real-time notifications, personalize your profile, and utilize advanced resources. <br/>
              Join us and take your coding skills to the next level.
        </p>

        {!loggedin && (<footer className="logintab">
          <text onClick={() => navigate('/signup')}>Sign up </text> &nbsp; | &nbsp;
          <text onClick={() => navigate('/login')}>Login</text>
        </footer>)}

        {loggedin && (<footer className="logintab">
          <text onClick={() => navigate('/logout')}> Logout </text>
        </footer>)}
      </div>

    </>
  );
};

export default Home;
