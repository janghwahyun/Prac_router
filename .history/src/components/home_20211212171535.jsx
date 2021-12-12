import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = props => {
  const navigator = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigator.push('/profile');
        }}
      >
        go to profile
      </button>
    </>
  );
};

export default Home;
