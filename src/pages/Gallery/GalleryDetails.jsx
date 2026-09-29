import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./GalleryDetails.css";

// Taj Mahal Images
import taj1 from "../../assets/gallery/tajmahal/taj1.jpg";
import taj2 from "../../assets/gallery/tajmahal/taj2.jpg";
import taj3 from "../../assets/gallery/tajmahal/taj3.jpg";
import taj4 from "../../assets/gallery/tajmahal/taj4.jpg";
import taj5 from "../../assets/gallery/tajmahal/taj5.jpg";
import taj6 from "../../assets/gallery/tajmahal/taj6.jpg";
import taj7 from "../../assets/gallery/tajmahal/taj7.jpg";
import taj8 from "../../assets/gallery/tajmahal/taj8.jpg";

// Varanasi Images
import varanasi1 from "../../assets/gallery/varanasi/varanasi1.jpg";
import varanasi2 from "../../assets/gallery/varanasi/varanasi2.jpg";
import varanasi3 from "../../assets/gallery/varanasi/varanasi3.jpg";
import varanasi4 from "../../assets/gallery/varanasi/varanasi4.jpg";
import varanasi5 from "../../assets/gallery/varanasi/varanasi5.jpg";
import varanasi6 from "../../assets/gallery/varanasi/varanasi6.jpg";
import varanasi7 from "../../assets/gallery/varanasi/varanasi7.jpg";
import varanasi9 from "../../assets/gallery/varanasi/varanasi9.jpg";
import varanasi10 from "../../assets/gallery/varanasi/varanasi10.jpg";
import varanasi11 from "../../assets/gallery/varanasi/varanasi11.jpg";

// Ayodhya Images
import ayodhya1 from "../ayodhya/ayodhya.jpg";
import ayodhya2 from "../ayodhya/Hanumangarhi.jpg";
import ayodhya3 from "../ayodhya/sharyuGhat.jpg";
import ayodhya4 from "../ayodhya/KanakBhawan.jpg";
import ayodhya5 from "../ayodhya/DashrathMahal.jpg";
import ayodhya6 from "../ayodhya/RamkiPaidi.jpg";

// Lucknow Images
import lucknow1 from "../lucknow/Lucknow.jpg";
import lucknow2 from "../lucknow/BaraImambara.jpg";
import lucknow3 from "../lucknow/RumiDarwaza.jpg";
import lucknow4 from "../lucknow/Imambara.jpg";
import lucknow5 from "../lucknow/BritishResidency.jpg";
import lucknow6 from "../lucknow/AmbedkarPark.jpg";
import lucknow7 from "../lucknow/DilkushaKothi.jpg";

function GalleryDetails() {
  const { place } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [downloading, setDownloading] = useState(false);

  const placeInfo = {
    tajmahal: {
      name: "Taj Mahal",
      cityName: "Agra",
      cityRoute: "/agra",
      description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the Yamuna river in Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal.",
      location: "Agra, Uttar Pradesh, India",
      images: [taj1, taj2, taj3, taj4, taj5, taj6, taj7, taj8]
    },
    varanasi: {
      name: "Varanasi",
      cityName: "Varanasi",
      cityRoute: "/varanasi",
      description: "Varanasi, also known as Benares, is a city on the banks of the Ganges in Uttar Pradesh. It is one of the oldest continuously inhabited cities in the world and is considered sacred in Hinduism, Buddhism, and Jainism.",
      location: "Varanasi, Uttar Pradesh, India",
      images: [varanasi1, varanasi2, varanasi3, varanasi4, varanasi5, varanasi6, varanasi7, varanasi9, varanasi10, varanasi11]
    },
    ayodhya: {
      name: "Ayodhya",
      cityName: "Ayodhya",
      cityRoute: "/ayodhya",
      description: "Ayodhya, situated on the banks of the holy river Saryu, is an ancient city of immense religious significance. Revered as the sacred birthplace of Lord Rama, it is adorned with timeless temples and historic ghats.",
      location: "Ayodhya, Uttar Pradesh, India",
      images: [ayodhya1, ayodhya2, ayodhya3, ayodhya4, ayodhya5, ayodhya6]
    },
    lucknow: {
      name: "Lucknow",
      cityName: "Lucknow",
      cityRoute: "/lucknow",
      description: "Lucknow, the storied City of Nawabs, is celebrated for its regal Awadhi architecture, exquisite Chikankari embroidery, and refined culinary culture with historical marvels like Bara Imambara and Rumi Darwaza.",
      location: "Lucknow, Uttar Pradesh, India",
      images: [lucknow1, lucknow2, lucknow3, lucknow4, lucknow5, lucknow6, lucknow7]
    }
  };

  const currentPlace = placeInfo[place];

  // Disable background scrolling when modal is open and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  // Professional Download Handler
  const handleDownload = async (e) => {
    if (e) e.stopPropagation();
    if (!selectedImage) return;

    try {
      setDownloading(true);
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = blobUrl;
      const cleanPlace = currentPlace?.name 
        ? currentPlace.name.toLowerCase().replace(/\s+/g, "-") 
        : "tourup";
      link.download = `${cleanPlace}-tourup-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Direct blob download failed, fallback to direct link:", err);
      const link = document.createElement("a");
      link.href = selectedImage;
      link.download = `${currentPlace?.name || "tourup"}.jpg`;
      link.target = "_blank";
      link.click();
    } finally {
      setTimeout(() => setDownloading(false), 600);
    }
  };

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
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back to Gallery
        </button>

        <motion.div 
          className="header-content"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="header-info">
            <h2>{currentPlace.name}</h2>
            <p className="location">📍 {currentPlace.location}</p>
            <p className="description">{currentPlace.description}</p>
          </div>

          {currentPlace.cityRoute && (
            <div className="header-action">
              <button
                type="button"
                className="explore-place-btn"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate(currentPlace.cityRoute);
                }}
              >
                <span>Explore {currentPlace.cityName}</span>
                <FaArrowRight className="place-btn-arrow" />
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <div className="image-grid">
        {currentPlace.images.map((img, index) => (
          <motion.div
            key={index}
            className="image-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`${currentPlace.name} ${index + 1}`} loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Top Toolbar */}
            <div className="modal-toolbar" onClick={(e) => e.stopPropagation()}>
              <div className="modal-info">
                <h3>{currentPlace.name}</h3>
                <span className="modal-location">📍 {currentPlace.location}</span>
              </div>
              <div className="modal-actions">
                <button 
                  className={`modal-download-btn ${downloading ? 'downloading' : ''}`}
                  onClick={handleDownload}
                  disabled={downloading}
                  title="Download Photo in Full Quality"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>{downloading ? "Downloading..." : "Download Photo"}</span>
                </button>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close modal"
                  title="Close (Esc)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Image Box */}
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt={currentPlace.name} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalleryDetails;