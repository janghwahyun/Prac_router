import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = props => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate.push('/profile');
        }}
      >
        go to profile
      </button>
    </>
  );
};

export default Home;
