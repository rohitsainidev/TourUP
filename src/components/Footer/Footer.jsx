import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import footerBimg from "../../assets/footer/footer-bimg.jpg";

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${footerBimg})` }}
    >
      {/* DARK OVERLAY */}
      <div className="footer-overlay"></div>

      <div className="footer-container">

        {/* ================= BRAND ================= */}
        <div className="footer-brand">

          <div className="footer-logo">
            Tour<span>UP</span>
          </div>

          <p className="brand-text">
            Explore Uttar Pradesh with TourUP.
            Find famous places, beautiful cities,
            culture and history in one place.
          </p>

          <div className="footer-line"></div>

          <p className="explore-text">
            Travel • Explore • Discover
          </p>

        </div>


        {/* ================= QUICK LINKS ================= */}
        <div className="footer-box">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/places">Places</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>


        {/* ================= POPULAR PLACES ================= */}
        <div className="footer-box">

          <h3>Popular Places</h3>

          <Link to="/ayodhya">Ayodhya</Link>
          <Link to="/varanasi">Varanasi</Link>
          <Link to="/lucknow">Lucknow</Link>
          <Link to="/agra">Agra</Link>

          <a href="#places">More Places</a>

        </div>


        {/* ================= CONTACT ================= */}
        <div className="footer-box contact-box">

          <h3>Contact Us</h3>

          <p>
            <span className="contact-icon">📍</span>
            Lucknow, Uttar Pradesh
          </p>

          <p>
            <span className="contact-icon">☎</span>
            +91 6397432030
          </p>

          <p>
            <span className="contact-icon">✉</span>
            rohitsaini123du@gmail.com
          </p>

        </div>

      </div>


      {/* ================= FOOTER MIDDLE ================= */}
      <div className="footer-middle">

        <div className="middle-content">

          <div>
            <h4>Discover Uttar Pradesh</h4>

            <p>
              Temples, history, culture and beautiful places
              are waiting for you.
            </p>
          </div>

          <Link to="/places" className="footer-explore-btn">
            Explore Places
            <span>→</span>
          </Link>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">

        <div className="footer-bottom-left">
          <p>
            © 2026 <strong>TourUP</strong>. All Rights Reserved.
          </p>
        </div>

        <div className="footer-bottom-links">
          <a href="#home">Home</a>
          <a href="#places">Places</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;