// src/components/MovieList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', image: 'movie1.jpg' },
  { id: 2, title: 'Movie 2', image: 'movie2.jpg' },
  { id: 3, title: 'Movie 3', image: 'movie3.jpg' },
  { id: 4, title: 'Movie 4', image: 'movie4.jpg' },
  { id: 5, title: 'Movie 5', image: 'movie5.jpg' },
  { id: 6, title: 'Movie 6', image: 'movie6.jpg' },
  { id: 7, title: 'Movie 7', image: 'movie7.jpg' },
  { id: 8, title: 'Movie 8', image: 'movie8.jpg' },
];

const MovieList = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', padding: '20px' }}>
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)} style={{ cursor: 'pointer' }}>
          <img src={`/images/${movie.image}`} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;