import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../assets/logo-mark.png";

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

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  /* =========================
     CLOSE EVERYTHING
  ========================= */
  const closeAll = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

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

  const handlePlaceClick = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  /* =========================
     SMOOTH SCROLL TO SECTION
  ========================= */
  const handleNavScroll = (e, sectionId) => {
    e.preventDefault();
    closeAll();

    const isHomeRoute =
      location.pathname === "/" ||
      location.pathname === "/home" ||
      location.pathname === "/gallery" ||
      location.pathname === "/about" ||
      location.pathname === "/contact";

    if (isHomeRoute) {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/");
        setActiveSection("home");
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", `/#${sectionId}`);
          setActiveSection(sectionId);
        }
      }
    } else {
      // If user is on a separate page like /agra, /varanasi, /gallery/tajmahal
      navigate(`/#${sectionId}`, { state: { scrollTo: sectionId } });
    }
  };

  /* =========================
     OUTSIDE CLICK LISTENER
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
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* =========================
     ACTIVE SECTION SCROLL SPY
  ========================= */
  useEffect(() => {
    const isHomeRoute =
      location.pathname === "/" ||
      location.pathname === "/home" ||
      location.pathname === "/gallery" ||
      location.pathname === "/about" ||
      location.pathname === "/contact";

    if (!isHomeRoute) {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ["contact", "about", "gallery", "home"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
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
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavScroll(e, "home")}
          aria-label="Uttar Pradesh Unveiled Homepage"
        >
          <img
            src={logoImg}
            alt="Uttar Pradesh Unveiled"
            className="navbar-logo-img"
          />
          <div className="navbar-brand-text">
            <span className="brand-title">UTTAR PRADESH</span>
            <span className="brand-subtitle">UNVEILED</span>
          </div>
        </a>

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
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>

          {/* HOME */}
          <li>
            <a
              href="#home"
              className={`nav-item ${activeSection === "home" ? "active" : ""}`}
              onClick={(e) => handleNavScroll(e, "home")}
            >
              <FaHome className="nav-icon" />
              <span>Home</span>
            </a>
          </li>

          {/* ================= PLACES ================= */}
          <li
            ref={dropdownRef}
            className={`dropdown ${isDropdownOpen ? "dropdown-open" : ""}`}
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
                className={`dropdown-arrow ${isDropdownOpen ? "rotate" : ""}`}
              />
            </button>

            {/* DROPDOWN */}
            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <Link to="/agra" onClick={handlePlaceClick}>
                <span>Agra</span>
              </Link>
              <Link to="/varanasi" onClick={handlePlaceClick}>
                <span>Varanasi</span>
              </Link>
              <Link to="/ayodhya" onClick={handlePlaceClick}>
                <span>Ayodhya</span>
              </Link>
              <Link to="/lucknow" onClick={handlePlaceClick}>
                <span>Lucknow</span>
              </Link>
            </div>
          </li>

          {/* ================= GALLERY ================= */}
          <li>
            <Link
              to="/gallery"
              className={`nav-item ${location.pathname.startsWith("/gallery") ? "active" : ""}`}
              onClick={closeAll}
            >
              <FaImage className="nav-icon" />
              <span>Gallery</span>
            </Link>
          </li>

          {/* ================= MAP ================= */}
          <li>
            <a
              href="https://www.google.com/maps/place/Uttar+Pradesh"
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
              className={`nav-item ${activeSection === "about" ? "active" : ""}`}
              onClick={(e) => handleNavScroll(e, "about")}
            >
              <FaInfoCircle className="nav-icon" />
              <span>About</span>
            </a>
          </li>

          {/* ================= CONTACT ================= */}
          <li>
            <a
              href="#contact"
              className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
              onClick={(e) => handleNavScroll(e, "contact")}
            >
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </a>
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