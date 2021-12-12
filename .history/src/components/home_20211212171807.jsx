import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = props => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/profile');
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>go to profile</button>
    </>
  );
};

export default Home;
