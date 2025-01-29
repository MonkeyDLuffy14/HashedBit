// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from '/home/shreedhar/Hashedbit/Assig8/movie-booking-app/src/componenets/MovieList.js';
import MovieDetails from '/home/shreedhar/Hashedbit/Assig8/movie-booking-app/src/componenets/MovieDetails.js';
import BookingForm from '/home/shreedhar/Hashedbit/Assig8/movie-booking-app/src/componenets/BookingForm.js';
import Confirmation from '/home/shreedhar/Hashedbit/Assig8/movie-booking-app/src/componenets/Confirmation.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;