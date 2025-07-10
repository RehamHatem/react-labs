import React, { useEffect, useState } from 'react';
import '../Movies.css';
import { FaRegHeart } from 'react-icons/fa';

function Movies({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);   
  const [error, setError] = useState(null);  

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=305a09d69ae1c0aa21177d63db04616e'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message || 'Something went wrong');
      }finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="popular-movies">
      <h2>Popular Movies</h2>
      {loading && !error && <p style={{ padding: '1rem', color:'black' }}>Loading movies...</p>}
      {error && <p style={{ padding: '1rem', color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="poster"
              />
              <div className="rating-badge">{Math.round(movie.vote_average * 10)}</div>
              <div className="movie-title">{movie.title}</div>
              <div className="movie-date">{movie.release_date}</div>
              <div className="watchlist-icon">
                <FaRegHeart />
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: '1rem' }}>No movies found.</p>
        )}
      </div>
    



      )}
      </div>

      
  );
}

export default Movies;
