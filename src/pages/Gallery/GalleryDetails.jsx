import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./GalleryDetails.css";

// Sirf Taj Mahal Images Import Karein
import taj1 from "../../assets/gallery/tajmahal/taj1.jpg";
import taj2 from "../../assets/gallery/tajmahal/taj2.jpg";
import taj3 from "../../assets/gallery/tajmahal/taj3.jpg";
import taj4 from "../../assets/gallery/tajmahal/taj4.jpg";
import taj5 from "../../assets/gallery/tajmahal/taj5.jpg";
import taj6 from "../../assets/gallery/tajmahal/taj6.jpg";
import taj7 from "../../assets/gallery/tajmahal/taj7.jpg";
import taj8 from "../../assets/gallery/tajmahal/taj8.jpg";
// Import Varanasi Images (10 images)
import varanasi1 from "../../assets/gallery/varanasi/varanasi1.jpg";
import varanasi2 from "../../assets/gallery/varanasi/varanasi2.jpg";
import varanasi3 from "../../assets/gallery/varanasi/varanasi3.jpg";
import varanasi4 from "../../assets/gallery/varanasi/varanasi4.jpg";
import varanasi5 from "../../assets/gallery/varanasi/varanasi5.jpg";
import varanasi6 from "../../assets/gallery/varanasi/varanasi6.jpg";
import varanasi7 from "../../assets/gallery/varanasi/varanasi7.jpg";
// import varanasi8 from "../../assets/gallery/varanasi/varanasi8.jpg";
import varanasi9 from "../../assets/gallery/varanasi/varanasi9.jpg";
import varanasi10 from "../../assets/gallery/varanasi/varanasi10.jpg";
import varanasi11 from "../../assets/gallery/varanasi/varanasi11.jpg";


function GalleryDetails() {
  const { place } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const placeInfo = {
    tajmahal: {
      name: "Taj Mahal",
      description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the Yamuna river in Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal.",
      location: "Agra, Uttar Pradesh, India",
      images: [taj1, taj2, taj3, taj4 ,taj5,taj6,taj7,taj8]
    },
    // Baaki places comment karein
      varanasi: {
      name: "Varanasi",
      description: "Varanasi, also known as Benares, is a city on the banks of the Ganges in Uttar Pradesh. It is one of the oldest continuously inhabited cities in the world and is considered sacred in Hinduism, Buddhism, and Jainism.",
      location: "Varanasi, Uttar Pradesh, India",
      totalImages: 10,
      images: [varanasi1, varanasi2, varanasi3, varanasi4, varanasi5, varanasi6, varanasi7,  varanasi9, varanasi10]
    }
  };

  const currentPlace = placeInfo[place];

  if (!currentPlace) {
    return (
      <div className="error-container">
        <h2>Place not found</h2>
        <button onClick={() => navigate('/gallery')} className="back-btn">
          Back to Gallery
        </button>
      </div>
    );
  }

  return (
    <div className="gallery-details">
      <div className="details-header">
        <button onClick={() => navigate('/gallery')} className="back-btn">
          ← Back to Gallery
        </button>
        <motion.div 
          className="header-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{currentPlace.name}</h2>
          <p className="location">📍 {currentPlace.location}</p>
          <p className="description">{currentPlace.description}</p>
        </motion.div>
      </div>

      <div className="image-grid">
        {currentPlace.images.map((img, index) => (
          <motion.div
            key={index}
            className="image-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`${currentPlace.name} ${index + 1}`} />
            <div className="image-overlay">
              <span>🔍 Click to enlarge</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Enlarged view" />
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalleryDetails;