import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./About.css";



import {
  FaLandmark,
  FaImages,
  FaArrowRight,
  FaCompass,
} from "react-icons/fa";

function About() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    destinations: 0,
    travelers: 0,
    rating: 0,
    support: 0,
  });
  const statsRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 1800; // 1.8s duration
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // smooth easeOutCubic curve
      const ease = 1 - Math.pow(1 - progress, 3);

      setStats({
        destinations: Math.floor(ease * 500),
        travelers: Math.floor(ease * 10000),
        rating: Number((ease * 4.9).toFixed(1)),
        support: Math.floor(ease * 24),
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setStats({
          destinations: 500,
          travelers: 10000,
          rating: 4.9,
          support: 24,
        });
      }
    };

    requestAnimationFrame(update);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${id}`);
    }
  };

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* ================= HEADER ================= */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="about-tag">ABOUT UTTAR PRADESH UNVEILED</span>
          <h2>
            Discover the Heritage & Spirit of <span>Uttar Pradesh</span>
          </h2>
          <p className="about-lead">
            Uttar Pradesh Unveiled is your dedicated travel companion across Uttar Pradesh — home to timeless
            monuments, sacred riverfronts, and legendary cultural heritage. From the eternal ghats
            of Varanasi and the divine aura of Ayodhya, to the architectural poetry of the Taj Mahal
            and royal elegance of Lucknow, we make discovering UP seamless and inspiring.
          </p>
        </motion.div>

        {/* ================= RUNNING STATS STRIP ================= */}
        <motion.div
          className="about-trust-strip"
          ref={statsRef}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="trust-item">
            <span className="trust-number">{stats.destinations}+</span>
            <span className="trust-text">Historic Sites</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-number">{stats.travelers.toLocaleString()}+</span>
            <span className="trust-text">Happy Travelers</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-number">{stats.rating} ★</span>
            <span className="trust-text">Curated Quality</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-number">{stats.support}/7</span>
            <span className="trust-text">Travel Guidance</span>
          </div>
        </motion.div>

        {/* ================= PILLARS ================= */}
        <div className="about-pillars">

          {/* PILLAR 1: CITIES */}
          <motion.div
            className="pillar-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pillar-icon">
              <FaLandmark />
            </div>
            <h3>Iconic Historic Cities</h3>
            <p>
              Dive deep into the culture, historical landmarks, and culinary traditions of Uttar
              Pradesh's most celebrated travel destinations.
            </p>
          </motion.div>

          {/* PILLAR 2: GALLERY */}
          <motion.div
            className="pillar-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pillar-icon">
              <FaImages />
            </div>
            <h3>Curated Photo Gallery</h3>
            <p>
              Browse our high-resolution visual collection of heritage monuments, holy ghats, and
              vibrant festivals. View photos in fullscreen and download them directly for free.
            </p>

            <div className="pillar-action-wrap">
              <button
                type="button"
                className="pillar-action-btn primary"
                onClick={() => scrollToSection("gallery")}
              >
                <span>Browse Gallery</span>
                <FaArrowRight className="btn-arrow" />
              </button>
            </div>
          </motion.div>

          {/* PILLAR 3: NAVIGATION & TRIP HELP */}
          <motion.div
            className="pillar-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pillar-icon">
              <FaCompass />
            </div>
            <h3>Trip Planning & Support</h3>
            <p>
              Plan your travel itinerary with confidence. Access Google Maps locations, learn about
              monuments, and get in touch with our team for questions.
            </p>

            <div className="pillar-action-wrap">
              <button
                type="button"
                className="pillar-action-btn secondary"
                onClick={() => scrollToSection("contact")}
              >
                <span>Contact Team</span>
                <FaArrowRight className="btn-arrow" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;