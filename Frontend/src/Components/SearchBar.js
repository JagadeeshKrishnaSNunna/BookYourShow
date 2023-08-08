import React, { useState } from 'react';
import "../CSS/SearchBar.css"

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className='SearchBoxContainer'>
      <input
      className='SearchBoxInput'
        type="text"
        placeholder="Search movies,Theatre.."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className='searchButton' onClick={handleSubmit}>Search</button>
    </form>
  );
}

export default SearchBar;