import React, { useState } from 'react';
import '../Hero.css';

function Hero ({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to our movie app</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search and explore..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
