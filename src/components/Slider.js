import React, { useState, useEffect } from 'react';
import './Slider.css';

const offers = [
    { id: 1, text: "50% Off on All Electronics!", image: "/images/offer1.jpg" },
    { id: 2, text: "Buy One Get One Free on Shoes!", image: "/images/offer2.jpg" },
    { id: 3, text: "20% Off on Your First Purchase!", image: "/images/offer3.jpg" },
];

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % offers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + offers.length) % offers.length);
    };

    return (
        <div className="slider">
            <button className="slider-button prev" onClick={prevSlide}>&#10094;</button>
            <div className="slide">
                <img src={offers[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
                <div className="slide-text">{offers[currentIndex].text}</div>
            </div>
            <button className="slider-button next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default Slider;
