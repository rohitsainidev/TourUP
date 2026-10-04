import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

import footerBimg from "../../assets/footer/footer-bimg.jpg";
import logoImg from "../../assets/logo-mark.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${footerBimg})` }}
    >
      {/* CINEMATIC LUXURY DARK OVERLAY */}
      <div className="footer-overlay" />

      {/* GLOWING TOP ACCENT BORDER */}
      <div className="footer-top-accent" />

      <div className="footer-container">

        {/* 1. BRAND */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo" aria-label="Uttar Pradesh Unveiled">
            <img src={logoImg} alt="Uttar Pradesh Unveiled" className="footer-logo-img" />
            <div className="footer-brand-text">
              <span className="footer-brand-title">UTTAR PRADESH</span>
              <span className="footer-brand-subtitle">UNVEILED</span>
            </div>
          </Link>

          <p className="brand-desc">
            Your trusted digital companion to exploring the eternal ghats, legendary temples,
            and royal cultural heritage of Uttar Pradesh.
          </p>

          <div className="footer-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Uttar Pradesh Unveiled Instagram"
              className="footer-social-btn"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Uttar Pradesh Unveiled Facebook"
              className="footer-social-btn"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Uttar Pradesh Unveiled Twitter"
              className="footer-social-btn"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* 2. EXPLORE DESTINATIONS */}
        <div className="footer-col">
          <h4 className="footer-col-title">Explore Guides</h4>
          <ul className="footer-links">
            <li>
              <Link to="/agra">Agra (Taj Mahal)</Link>
            </li>
            <li>
              <Link to="/varanasi">Varanasi (Sacred Ghats)</Link>
            </li>
            <li>
              <Link to="/ayodhya">Ayodhya (Ram Mandir)</Link>
            </li>
            <li>
              <Link to="/lucknow">Lucknow (Awadh Heritage)</Link>
            </li>
            <li>
              <Link to="/places">All Destinations</Link>
            </li>
          </ul>
        </div>

        {/* 3. QUICK NAVIGATION */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <button
                type="button"
                className="footer-nav-btn"
                onClick={() => handleNav("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-nav-btn"
                onClick={() => handleNav("gallery")}
              >
                Curated Gallery
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-nav-btn"
                onClick={() => handleNav("about")}
              >
                About UP Unveiled
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-nav-btn"
                onClick={() => handleNav("contact")}
              >
                Contact & Support
              </button>
            </li>
          </ul>
        </div>

        {/* 4. CONTACT / DESK */}
        <div className="footer-col contact-col">
          <h4 className="footer-col-title">Visitor Help Desk</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-row static">
              <FaMapMarkerAlt className="f-icon" />
              <span>Hazratganj, Lucknow, UP</span>
            </div>

            <a href="tel:+918008687870" className="footer-contact-row">
              <FaPhoneAlt className="f-icon" />
              <span>+91 800-TOUR-UP</span>
            </a>

            <a href="mailto:support@tourup.com" className="footer-contact-row">
              <FaEnvelope className="f-icon" />
              <span>support@upunveiled.com</span>
            </a>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-credit-pill">
            <span className="pill-brand">
              © {new Date().getFullYear()} <strong>Uttar Pradesh <span>Unveiled</span></strong>
            </span>
            <span className="pill-sep">•</span>
            <span className="pill-text">Made with</span>
            <FaHeart className="pill-heart" />
            <span className="pill-text">by</span>
            <span className="pill-author">Rohit Saini</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;