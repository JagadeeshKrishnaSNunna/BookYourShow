import React, { useState } from 'react';
import SearchBar from './SearchBar';
import "./../CSS/MoviesSearch.css"

export default function MoviesSearch({dataFromMovies}) {
  const [searchResults, setSearchResults] = useState([]);
  
  const MouseEnterEvent=(e)=>{
    e.target.style.cursor = 'pointer';
    e.target.style.color='blue';
    // dataFromMovies(e.target.id)
  }

  const MouseLeaveEvent=(e)=>{
    e.target.style.color='white';
    // dataFromMovies("Home")
  }

  const OnClickEvent=(e)=>{
    dataFromMovies(e.target.id)
  }

  const handleSearch = (searchTerm) => {
    const moviesData=[{"id":"1","title":"ola","description":"ola is a movie"}]
    const filteredMovies = moviesData.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(filteredMovies);
  };

  return (
    <div className='movieSeaechContainer'>
      <h3 onMouseEnter={MouseEnterEvent} onMouseLeave={MouseLeaveEvent} onClick={OnClickEvent} id="Home">Home</h3>
      {/* <h3 onMouseEnter={MouseEnterEvent} onMouseLeave={MouseLeaveEvent} onClick={OnClickEvent} id="Theatre">Find-Theatre</h3>
      <h3 onMouseEnter={MouseEnterEvent} onMouseLeave={MouseLeaveEvent} onClick={OnClickEvent} id="Food">Food&Drinks</h3> */}
      <SearchBar onSearch={handleSearch} />
      {/* {searchResults.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      ))} */}
    </div>
  );
}

