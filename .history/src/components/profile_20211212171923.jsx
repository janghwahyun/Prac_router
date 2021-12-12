import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = props => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  }
  return (
    <>
      <h1>profile</h1>
      <button onClick={handleClick}>go to home</button>
    </>
  );
};

export default Profile;
