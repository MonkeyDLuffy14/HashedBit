// src/components/MovieDetails.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', image: 'movie1.jpg', description: 'Description of Movie 1' },
  { id: 2, title: 'Movie 2', image: 'movie2.jpg', description: 'Description of Movie 2' },
  { id: 3, title: 'Movie 3', image: 'movie3.jpg', description: 'Description of Movie 3' },
  { id: 4, title: 'Movie 4', image: 'movie4.jpg', description: 'Description of Movie 4' },
  { id: 5, title: 'Movie 5', image: 'movie5.jpg', description: 'Description of Movie 5' },
  { id: 6, title: 'Movie 6', image: 'movie6.jpg', description: 'Description of Movie 6' },
  { id: 7, title: 'Movie 7', image: 'movie7.jpg', description: 'Description of Movie 7' },
  { id: 8, title: 'Movie 8', image: 'movie8.jpg', description: 'Description of Movie 8' },
  
  // Add more movies as needed
];

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div style={{ padding: '20px' }}>
      <img src={`/images/${movie.image}`} alt={movie.title} style={{ width: '300px', height: 'auto' }} />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
};

export default MovieDetails;