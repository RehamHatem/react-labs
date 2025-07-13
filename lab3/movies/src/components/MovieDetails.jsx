import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../MovieDetails.css';

const API_KEY = '305a09d69ae1c0aa21177d63db04616e';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [watchlisted, setWatchlisted] = useState(false);

  useEffect(() => {
    async function fetchMovieDetails() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        if (!res.ok) throw new Error('Failed to fetch movie details');
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p style={{ padding: '2rem' }}>Loading movie...</p>;
  if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;

  return (
    <div className="movie-details-container">
      <div className="poster-section">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
      </div>

      <div className="info-section">
        <div className="movie-header">
          <h1>{movie.title}</h1>
          <div className="release-date">{movie.release_date}</div>
          <div className="rating-stars">
            ⭐ {Math.round(movie.vote_average * 10) / 10} &nbsp;•&nbsp; {movie.vote_count} votes
          </div>
          <div
            className="watchlist-icon"
            onClick={() => setWatchlisted(!watchlisted)}
          >
            {watchlisted ? <FaHeart color="gold" size={20} /> : <FaRegHeart size={20} />}
          </div>
        </div>

        <p className="movie-overview">{movie.overview}</p>

        <div className="genres">
          {movie.genres.map((genre) => (
            <span key={genre.id} className="genre-badge">{genre.name}</span>
          ))}
        </div>

        <div className="meta-info">
          <div><strong>Duration:</strong> {movie.runtime} Min.</div>
          <div><strong>Languages:</strong> {movie.spoken_languages.map(lang => lang.english_name).join(', ')}</div>
        </div>

        <div className="studio-logo">
          {movie.production_companies?.[0]?.logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.production_companies[0].logo_path}`}
              alt={movie.production_companies[0].name}
              height={40}
            />
          )}
        </div>

        {movie.homepage && (
          <a className="website-button" href={movie.homepage} target="_blank" rel="noopener noreferrer">
            Website 🌐
          </a>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
