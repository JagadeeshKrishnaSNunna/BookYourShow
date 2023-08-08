import React from 'react';
import './../CSS/Card.css'; 

export default function Card({dataFromCard,movie}) {
  const BookButtonHandler=(movieData)=>{
    dataFromCard(movieData)
  }
  return (
    <div className="cardContainer">
      <img className="card-image" src={movie.posterUrl} alt="Card" />
      <h2 className="card-title">{movie.title} </h2>
      <div className="card-content">
        <p className="card-text">{movie.duration}</p>
        <button class="buttonClass" onClick={()=>{BookButtonHandler(movie)}}>Book</button>
      </div>
    </div>
  );
}


