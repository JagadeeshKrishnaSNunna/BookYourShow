import React, { useState, useEffect } from 'react';
import './../CSS/Carousel.css';
import Card from './Card'

function Carousel({ carouselData, slideInterval = 2500 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, slideInterval);

        return () => {
            clearInterval(interval);
        };
    }, [slideInterval]);

    return (
            <div className="carouselBackgroungContainer">
                {/* <button className="prev-button" onClick={goToPrevSlide}>&#8249;</button> */}
                <div className='OffersContainer'>
                <p className='Offers'>{carouselData[currentIndex]}</p>
                </div>
                {/* <Card title={carouselData[currentIndex].title} content={carouselData[currentIndex].content} imageUrl={carouselData[currentIndex].url} /> */}
                {/* <button className="next-button" onClick={goToNextSlide}>&#8250;</button> */}
        </div>
    );
}

export default Carousel;