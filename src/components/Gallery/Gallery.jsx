import React, { useRef } from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import tajmahal from "../../assets/tajmahal.jpg";
import varanasi from "../../assets/Varanasi.jpg";
import ayodhya from "../../assets/Ayodhya.jpg";
import lucknow from "../../assets/Lucknow.jpg";

function Gallery() {
  const navigate = useNavigate();
  const sliderRef = useRef();

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  const places = [
    { 
      name: "Taj Mahal", 
      img: tajmahal,
      description: "Symbol of Love",
      location: "Agra, Uttar Pradesh",
      route: "/agra"
    },
    { 
      name: "Varanasi", 
      img: varanasi,
      description: "City of Lights",
      location: "Varanasi, Uttar Pradesh",
      route: "/varanasi"
    },
    { 
      name: "Ayodhya", 
      img: ayodhya,
      description: "Birthplace of Lord Ram",
      location: "Ayodhya, Uttar Pradesh",
      route: "/ayodhya"
    },
    { 
      name: "Lucknow", 
      img: lucknow,
      description: "City of Nawabs",
      location: "Lucknow, Uttar Pradesh",
      route: "/lucknow"
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="gallery-section-tag">DESTINATIONS</span>
        <h2>Explore Beautiful Places</h2>
        <p>Discover the rich heritage, timeless spirituality, and vibrant culture of Uttar Pradesh</p>
      </motion.div>

      <div className="gallery-wrapper">
        <button 
          className="gallery-btn left" 
          onClick={scrollLeft}
          aria-label="Previous destination"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button 
          className="gallery-btn right" 
          onClick={scrollRight}
          aria-label="Next destination"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="gallery-grid" ref={sliderRef}>
          {places.map((place, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              onClick={() => navigate(place.route)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="image-wrapper">
                <img src={place.img} alt={place.name} />
                <div className="card-overlay"></div>

                <div className="card-content">
                  <span className="card-tagline">{place.description}</span>
                  <h3 className="card-title">{place.name}</h3>
                  <button className="explore-btn" tabIndex="-1">
                    <span>Explore More</span>
                    <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;