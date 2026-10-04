import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Places.css";

import agra from "../../assets/tajmahal.jpg";
import varanasi from "../../assets/Varanasi.jpg";
import ayodhya from "../../assets/Ayodhya.jpg";
import lucknow from "../../assets/Lucknow.jpg";

import {
  FaMapMarkerAlt,
  FaCompass,
  FaArrowRight,
  FaLandmark,
  FaPray,
  FaCity,
  FaStar,
} from "react-icons/fa";

function Places() {
  const [activeCategory, setActiveCategory] = useState("all");

  const places = [
    {
      id: "agra",
      name: "Agra",
      tagline: "Home of the Taj Mahal — Symbol of Eternal Love",
      category: "heritage",
      badge: "UNESCO Wonder",
      image: agra,
      highlights: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Petha"],
      description:
        "World-renowned for the magnificent white marble Taj Mahal, Agra Fort, and grand Mughal architecture on the banks of Yamuna.",
      link: "/agra",
      rating: "4.9",
      icon: FaLandmark,
    },
    {
      id: "varanasi",
      name: "Varanasi",
      tagline: "The World's Oldest Living Spiritual City",
      category: "spiritual",
      badge: "Spiritual Capital",
      image: varanasi,
      highlights: ["Ganga Aarti", "Assi Ghat", "Dashashwamedh", "Kashi Vishwanath"],
      description:
        "The sacred heart of India with serene river ghats, divine evening aartis, ancient spiritual traditions, and profound culture.",
      link: "/varanasi",
      rating: "4.9",
      icon: FaPray,
    },
    {
      id: "ayodhya",
      name: "Ayodhya",
      tagline: "The Sacred Birthplace of Lord Rama",
      category: "spiritual",
      badge: "Holy Heritage",
      image: ayodhya,
      highlights: ["Ram Mandir", "Hanuman Garhi", "Saryu Ghat", "Ram Ki Paidi"],
      description:
        "A revered sacred destination where devotion, mythological heritage, grand temples, and holy Saryu riverfront converge.",
      link: "/ayodhya",
      rating: "4.8",
      icon: FaPray,
    },
    {
      id: "lucknow",
      name: "Lucknow",
      tagline: "The City of Nawabs, Adab & Royal Flavours",
      category: "royal",
      badge: "Royal Culture",
      image: lucknow,
      highlights: ["Bara Imambara", "Rumi Darwaza", "Chikan Craft", "Awadhi Cuisine"],
      description:
        "Celebrated for its Nawabi manners, aristocratic architecture, legendary Awadhi cuisine, and intricate handcrafted textiles.",
      link: "/lucknow",
      rating: "4.8",
      icon: FaCity,
    },
  ];

  const categories = [
    { id: "all", label: "All Destinations" },
    { id: "heritage", label: "Heritage & Wonders" },
    { id: "spiritual", label: "Spiritual & Sacred" },
    { id: "royal", label: "Royal & Culture" },
  ];

  const filteredPlaces =
    activeCategory === "all"
      ? places
      : places.filter((p) => p.category === activeCategory);

  return (
    <div className="places-page-wrapper">
      {/* ================= HERO SECTION ================= */}
      <section className="places-hero">
        <div className="places-hero-bg-wrapper">
          <img
            src={agra}
            alt="Uttar Pradesh Heritage Destinations"
            className="places-hero-bg"
          />
          <div className="places-hero-overlay"></div>
        </div>

        <div className="places-hero-container">
          <div className="places-hero-content">
            <div className="places-hero-badge">
              <FaCompass className="badge-compass-icon" />
              <span>UTTAR PRADESH TOURISM • DESTINATION HUB</span>
            </div>

            <h1 className="places-hero-title">
              Explore Iconic <br />
              <span className="places-title-highlight">Places & Wonders</span>
            </h1>

            <p className="places-hero-desc">
              Embark on a captivating journey across Uttar Pradesh — from the
              timeless marble marvel of Agra to the celestial ghats of
              Varanasi, the sacred temples of Ayodhya, and the royal Nawabi
              palaces of Lucknow.
            </p>

            <div className="places-hero-actions">
              <a href="#destinations-grid" className="btn-places-primary">
                Browse Destinations <span>↓</span>
              </a>
              <Link to="/gallery" className="btn-places-secondary">
                View Photo Gallery
              </Link>
            </div>

            {/* Quick Hero Stats */}
            <div className="places-hero-stats">
              <div className="hero-stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Iconic Cities</span>
              </div>
              <div className="hero-stat-separator"></div>
              <div className="hero-stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Top Attractions</span>
              </div>
              <div className="hero-stat-separator"></div>
              <div className="hero-stat-item">
                <span className="stat-number">UNESCO</span>
                <span className="stat-label">World Heritage</span>
              </div>
            </div>
          </div>
        </div>

        <div className="places-scroll-down">
          <a href="#destinations-grid" aria-label="Scroll to destinations">
            <span className="arrow-down"></span>
          </a>
        </div>
      </section>

      {/* ================= DESTINATIONS SECTION ================= */}
      <section className="destinations-section" id="destinations-grid">
        <div className="destinations-container">
          <div className="destinations-header">
            <span className="section-eyebrow">CHOOSE YOUR NEXT JOURNEY</span>
            <h2 className="section-title">Popular Destinations in UP</h2>
            <p className="section-subtitle">
              Select any destination to discover its top monuments, culture,
              timings, entry fees, and travel guides.
            </p>

            {/* Category Filter Tabs */}
            <div className="category-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-tab ${
                    activeCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="destinations-grid">
            {filteredPlaces.map((place) => {
              const Icon = place.icon;
              return (
                <div className="destination-card" key={place.id}>
                  <div className="card-image-box">
                    <img src={place.image} alt={place.name} loading="lazy" />
                    <div className="card-image-overlay"></div>

                    <div className="card-top-badges">
                      <span className="card-badge">
                        <Icon className="card-badge-icon" />
                        {place.badge}
                      </span>
                      <span className="card-rating">
                        <FaStar className="star-icon" />
                        {place.rating}
                      </span>
                    </div>

                    <div className="card-image-content">
                      <h3 className="card-city-name">
                        <FaMapMarkerAlt className="marker-icon" />
                        {place.name}
                      </h3>
                      <p className="card-tagline">{place.tagline}</p>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="card-desc">{place.description}</p>

                    <div className="card-highlights">
                      <span className="highlights-label">Key Highlights:</span>
                      <div className="highlight-pills">
                        {place.highlights.map((h, i) => (
                          <span key={i} className="highlight-pill">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to={place.link} className="card-action-btn">
                      <span>Explore {place.name}</span>
                      <FaArrowRight className="action-arrow" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Places;