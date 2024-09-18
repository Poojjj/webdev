import React, { useState, useEffect } from 'react';
import './Movie.css'
const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const fetchMovies = async () => {
    try {
      const response = await fetch('https://freetestapi.com/api/v1/movies');
      const data = await response.json();
      setMovies(data); 
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };


  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="movies-container">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={fetchMovies}>Fetch Movies</button> 
      <div className="movies">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <div key={movie.id} className="card">
              <img src={movie.poster} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p><strong>Year:</strong> {movie.year}</p>
              <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
              <p><strong>Rating:</strong> {movie.rating}</p>
            </div>
          ))
        ) : null} 
      </div>
    </div>
  );
};

export default Movie;

