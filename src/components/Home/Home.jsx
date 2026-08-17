import React, { useState, useEffect } from "react";
import "./Home.css";

import tajmahal from "../../assets/tajmahal.jpg";
import varanasi from "../../assets/Varanasi.jpg";
import ayodhya from "../../assets/Ayodhya.jpg";
import lucknow from "../../assets/Lucknow.jpg";


function Home() {
  const slides = [
       {
          id: 1,
          image: tajmahal,
          title: "Taj Mahal",
          subtitle: "Where Love Lives Forever",
          description: "A timeless masterpiece of love and beauty."
          },
    {
      id: 2,
      image: varanasi,
      title: "Varanasi",
      subtitle: "The Spiritual Capital",
      description: "One of the world's oldest continuously inhabited cities"
    },
    {
      id: 3,
      image: ayodhya,
      title: "Ayodhya",
      subtitle: "The Birthplace of Lord Rama",
      description: "A sacred city steeped in mythology and spirituality"
    },
    {
      id: 4,
      image: lucknow,
      title: "Lucknow",
      subtitle: "The City of Nawabs",
      description: "Rich in culture, cuisine, and magnificent architecture"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play with alternating directions
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        // Alternate direction: right, left, right, left...
        setDirection(prevDir => prevDir === 'right' ? 'left' : 'right');
        return next;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setDirection('right');
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    if (index > current) {
      setDirection('right');
    } else if (index < current) {
      setDirection('left');
    }
    setCurrent(index);
  };

  return (
    <div
        id="home"
        className="hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slide ${index === current ? 'active' : ''} ${direction}`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="hero-image"
            />
            <div className="gradient-overlay"></div>
          </div>
        ))}
      </div>

      <div className="overlay-content">
        <span className="badge">Explore Uttar Pradesh</span>
        <h1 className="main-title">{slides[current].title}</h1>
        <h2 className="sub-title">{slides[current].subtitle}</h2>
        <p className="description">{slides[current].description}</p>
        {/* <div className="cta-buttons">
          <button className="btn-primary">Explore Now</button>
          <button className="btn-secondary">Learn More</button>
        </div> */}
      </div>

      <button className="nav-btn left-btn" onClick={prevSlide} aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      <button className="nav-btn right-btn" onClick={nextSlide} aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="slide-counter">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}

export default Home;