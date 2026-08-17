import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

import {
  FaMapMarkerAlt,
  FaHome,
  FaImage,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaUserPlus,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaGlobe,
} from "react-icons/fa";

const handleHomeClick = () => {
  closeAll();

  // URL se #gallery / #about / #contact remove karega
  window.history.replaceState(null, "", "/");

  // Home page ke top par le jayega
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  /* =========================
     MOBILE MENU
  ========================= */

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /* =========================
     PLACES DROPDOWN
  ========================= */

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDropdownOpen((prev) => !prev);
  };

  /* =========================
     CLOSE EVERYTHING
  ========================= */

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  /* =========================
     PLACE CLICK
  ========================= */

  const handlePlaceClick = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  /* =========================
     OUTSIDE CLICK
  ========================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =========================
     CLOSE ON ROUTE CHANGE
  ========================= */

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  /* =========================
     LOCK BODY SCROLL ON MOBILE
  ========================= */

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="logo"
          onClick={closeAll}
        >
          <span className="logo-icon">✦</span>

          <span className="logo-text">
            Tour<span className="logo-highlight">UP</span>
          </span>
        </Link>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* ================= NAVIGATION ================= */}

        <ul
          className={`nav-links ${
            isMenuOpen ? "active" : ""
          }`}
        >

          {/* HOME */}

                        <li>
                <Link
                  to="/"
                  className="nav-item"
                  onClick={handleHomeClick}
                >
                  <FaHome className="nav-icon" />
                  <span>Home</span>
                </Link>
              </li>

          {/* ================= PLACES ================= */}

          <li
            ref={dropdownRef}
            className={`dropdown ${
              isDropdownOpen ? "dropdown-open" : ""
            }`}
          >

            <button
              type="button"
              className="dropdown-toggle"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <FaGlobe className="nav-icon" />

              <span>Places</span>

              <FaChevronDown
                className={`dropdown-arrow ${
                  isDropdownOpen ? "rotate" : ""
                }`}
              />
            </button>

            {/* DROPDOWN */}

            <div
              className={`dropdown-menu ${
                isDropdownOpen ? "show" : ""
              }`}
            >

              <Link
                to="/agra"
                onClick={handlePlaceClick}
              >
                <span>Agra</span>
              </Link>

              <Link
                to="/varanasi"
                onClick={handlePlaceClick}
              >
                <span>Varanasi</span>
              </Link>

              <Link
                to="/ayodhya"
                onClick={handlePlaceClick}
              >
                <span>Ayodhya</span>
              </Link>

              <Link
                to="/lucknow"
                onClick={handlePlaceClick}
              >
                <span>Lucknow</span>
              </Link>

            </div>
          </li>
          
          

          {/* ================= GALLERY ================= */}

          <li>
            <a
              href="#gallery"
              className="nav-item"
              onClick={closeAll}
            >
              <FaImage className="nav-icon" />
              <span>Gallery</span>
            </a>
          </li>

          {/* ================= MAP ================= */}

          <li>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
              onClick={closeAll}
            >
              <FaMapMarkerAlt className="nav-icon" />
              <span>Map</span>
            </a>
          </li>

          {/* ================= ABOUT ================= */}

          <li>
            <a
              href="#about"
              className="nav-item"
              onClick={closeAll}
            >
              <FaInfoCircle className="nav-icon" />
              <span>About</span>
            </a>
          </li>

          {/* ================= CONTACT ================= */}

          <li>
                <Link
                  to="/contact"
                  className="nav-item"
                  onClick={closeAll}
                >
                  <FaEnvelope className="nav-icon" />
                  <span>Contact</span>
                </Link>
              </li>

          {/* ================= AUTH ================= */}

          <li className="auth-buttons">

            <Link
              to="/login"
              className="btn btn-login"
              onClick={closeAll}
            >
              <FaUser className="nav-icon" />
              <span>Login</span>
            </Link>

            <Link
              to="/signup"
              className="btn btn-signup"
              onClick={closeAll}
            >
              <FaUserPlus className="nav-icon" />
              <span>Signup</span>
            </Link>

          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;