import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Movies from './Movies';

function Home ()  {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (query) => {
    setSearchTerm(query);
  };
  
  return (
    <>
      <Navbar />
     <Hero onSearch={handleSearch} />
      <Movies searchTerm={searchTerm} />
    </>
  );
};

export default Home;
