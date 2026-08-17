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
  sliderRef.current.scrollBy({
    left: -380,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  sliderRef.current.scrollBy({
    left: 380,
    behavior: "smooth",
  });
};

  const places = [
    { 
      name: "Taj Mahal", 
      img: tajmahal,
      description: "Symbol of Love",
      location: "Agra, Uttar Pradesh"
    },
    { 
      name: "Varanasi", 
      img: varanasi,
      description: "City of Lights",
      location: "Varanasi, Uttar Pradesh"
    },
    { 
      name: "Ayodhya", 
      img: ayodhya,
      description: "Birthplace of Lord Ram",
      location: "Ayodhya, Uttar Pradesh"
    },
    { 
      name: "Lucknow", 
      img: lucknow,
      description: "City of Nawabs",
      location: "Lucknow, Uttar Pradesh"
    },
  ];

  return (
    <div className="gallery" id="gallery">
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Explore Beautiful Places</h2>
        <p>Discover the rich heritage and culture of Uttar Pradesh</p>
      </motion.div>

    <div className="gallery-grid" ref={sliderRef}>


                <div className="gallery-slider">
            <div className="gallery-track">
              {[...places, ...places].map((place, index) => (
                <motion.div
                  key={index}
                  className="gallery-item"
                  onClick={() =>
                    navigate(`/gallery/${place.name.toLowerCase().replace(/\s/g, "")}`)
                  }
                >
                  <div className="image-wrapper">
                    <img src={place.img} alt={place.name} />
                  </div>
                </motion.div>
              ))}
            </div>
            </div>

                  <button className="gallery-btn left" onClick={scrollLeft}>
            ❮
          </button>

          <button className="gallery-btn right" onClick={scrollRight}>
            ❯
          </button>

        {places.map((place, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            onClick={() => navigate(`/gallery/${place.name.toLowerCase().replace(/\s/g, '')}`)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="image-wrapper">
              <img src={place.img} alt={place.name} />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{place.name}</h3>
                  <p className="description">{place.description}</p>
                  <p className="location"> {place.location}</p>
                  <button className="explore-btn">Explore Now</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;