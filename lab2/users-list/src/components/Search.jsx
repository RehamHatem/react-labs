import { useState } from "react";
import "../Search.css"; 

function Search ({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch ()  {
    onSearch(searchInput); 
  };
    function handleReset () {
    setSearchInput("");
    onSearch("");
    
  };

  return (
    <div className="content">
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          placeholder="email"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Search;
