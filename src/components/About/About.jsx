import React from "react";
import "./About.css";

import {
  FaLandmark,
  FaImages,
  FaMapMarkedAlt,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* ================= HEADER ================= */}

        <div className="about-content">

          <span className="about-tag">
            ABOUT TOURUP
          </span>

          <h2>
            Explore <span>Uttar Pradesh</span>
          </h2>

          <p>
            TourUP helps you discover the famous places of Uttar Pradesh
            in one simple platform.
          </p>

          <p>
            Explore cities, see beautiful places, learn about their history,
            and plan your next trip easily.
          </p>

        </div>


        {/* ================= FEATURES ================= */}

        <div className="about-features">

          {/* CARD 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              <FaLandmark />
            </div>

            <span className="feature-number">
              01
            </span>

            <h3>
              Famous Cities
            </h3>

            <p>
              Explore famous cities like Agra, Varanasi, Ayodhya
              and Lucknow.
            </p>

            <div className="feature-bottom">
              <span>Explore Cities</span>
              <FaArrowRight />
            </div>

          </div>


          {/* CARD 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              <FaImages />
            </div>

            <span className="feature-number">
              02
            </span>

            <h3>
              Beautiful Gallery
            </h3>

            <p>
              See beautiful photos of famous places and destinations
              across Uttar Pradesh.
            </p>

            <div className="feature-bottom">
              <span>View Gallery</span>
              <FaArrowRight />
            </div>

          </div>


          {/* CARD 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              <FaMapMarkedAlt />
            </div>

            <span className="feature-number">
              03
            </span>

            <h3>
              Easy Navigation
            </h3>

            <p>
              Find places easily and get useful information for
              your journey.
            </p>

            <div className="feature-bottom">
              <span>Find Places</span>
              <FaArrowRight />
            </div>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="about-bottom">

          <div className="about-line"></div>

          <p>
            Discover • Explore • Travel
          </p>

          <div className="about-line"></div>

        </div>

      </div>

    </section>
  );
}

export default About;