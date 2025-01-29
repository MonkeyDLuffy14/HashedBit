// src/components/Confirmation.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Add useNavigate
  const { name, email, mobile, movieId } = location.state || {};
  const bookingId = Math.floor(Math.random() * 1000000);

  if (!location.state) {
    return <div>No booking details found.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Booking Confirmed!</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      <p>Movie ID: {movieId}</p>

      {/* Add Home Button */}
      <button
        onClick={() => navigate('/')} // Redirect to the main page
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Home
      </button>
    </div>
  );
};

export default Confirmation;