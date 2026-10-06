import React, { useState, useMemo, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FaSearch,
  FaTimes,
  FaFilter,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
  FaCheck,
  FaCar,
  FaHotel,
  FaUtensils,
  FaUserTie,
  FaWhatsapp,
  FaArrowRight,
  FaClock,
  FaTag,
  FaTimesCircle,
  FaSuitcaseRolling,
  FaChevronRight,
  FaInfoCircle,
  FaImages,
} from "react-icons/fa";
import {
  TOUR_PACKAGES,
  PACKAGE_TYPES,
  PACKAGE_DESTINATIONS,
} from "./packagesData";
import "./Packages.css";

// Hero scenic background
import heroBg from "../../assets/tajmahal.jpg";

export default function Packages() {
  const location = useLocation();

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [selectedPackage, setSelectedPackage] = useState(null); // For details modal

  // Sync with URL query parameter if user came from a link like /packages?destination=Agra
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const dest = params.get("destination") || params.get("dest");
    const type = params.get("type");
    const q = params.get("search");

    if (dest) {
      setSelectedDestination(dest);
    }
    if (type) {
      setSelectedType(type);
    }
    if (q) {
      setSearchQuery(q);
    }
  }, [location.search]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedPackage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background page from scrolling when modal is open
  useEffect(() => {
    if (selectedPackage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPackage]);

  // Filter Logic
  const filteredPackages = useMemo(() => {
    return TOUR_PACKAGES.filter((pkg) => {
      // 1. Destination filter
      if (
        selectedDestination !== "all" &&
        pkg.destination.toLowerCase() !== selectedDestination.toLowerCase()
      ) {
        return false;
      }

      // 2. Type filter
      if (
        selectedType !== "all" &&
        pkg.type.toLowerCase() !== selectedType.toLowerCase()
      ) {
        return false;
      }

      // 3. Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = pkg.title.toLowerCase().includes(query);
        const matchesDest = pkg.destination.toLowerCase().includes(query);
        const matchesTagline = pkg.tagline.toLowerCase().includes(query);
        const matchesType = pkg.type.toLowerCase().includes(query);
        const matchesHighlights = pkg.highlights.some((h) =>
          h.toLowerCase().includes(query)
        );

        if (
          !matchesTitle &&
          !matchesDest &&
          !matchesTagline &&
          !matchesType &&
          !matchesHighlights
        ) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedDestination]);

  // Quick reset
  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedDestination("all");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedType !== "all" ||
    selectedDestination !== "all";

  // WhatsApp Booking Link Generator
  const generateWhatsAppUrl = (pkg) => {
    const phone = "6397432030";
    const text = `Hello Uttar Pradesh Unveiled! I am interested in booking the tour package: "${pkg.title}" (${pkg.duration}, Starting at ₹${pkg.discountedPrice.toLocaleString("en-IN")}/person). Please share availability and customized itinerary details.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="packages-page-container">
      {/* =====================================================
          1. HERO BANNER (Matches user screenshot style)
      ===================================================== */}
      <section
        className="packages-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="packages-hero-overlay"></div>
        <div className="packages-hero-content">
          <span className="packages-hero-badge">
            <FaSuitcaseRolling /> Curated Travel Experiences
          </span>
          <h1 className="packages-hero-title">All Tour Packages</h1>
          <p className="packages-hero-subtitle">
            Discover our wide range of heritage, spiritual, and cultural tour
            packages across Uttar Pradesh
          </p>
        </div>
      </section>

      {/* =====================================================
          2. FLOATING SEARCH & FILTER BAR (Matches User Screenshot)
      ===================================================== */}
      <div className="packages-filter-section">
        <div className="packages-filter-card">
          {/* Search Input */}
          <div className="filter-input-wrap">
            <FaSearch className="filter-icon" />
            <input
              type="text"
              className="filter-search-input"
              placeholder="Search by destination or package name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search tour packages"
            />
            {searchQuery && (
              <button
                type="button"
                className="filter-clear-icon-btn"
                onClick={() => setSearchQuery("")}
                title="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Filter: All Types */}
          <div className="filter-dropdown-wrap">
            <FaFilter className="filter-icon" />
            <select
              className="filter-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              aria-label="Filter by type"
            >
              {PACKAGE_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* Filter: All Categories / Destinations */}
          <div className="filter-dropdown-wrap">
            <FaFilter className="filter-icon" />
            <select
              className="filter-select"
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              aria-label="Filter by category or destination"
            >
              {PACKAGE_DESTINATIONS.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Destination Pill Tags */}
        <div className="destination-pills-bar">
          <span className="pills-label">Popular Destinations:</span>
          {PACKAGE_DESTINATIONS.map((dest) => {
            const isActive = selectedDestination === dest.value;
            return (
              <button
                key={dest.value}
                type="button"
                className={`destination-quick-pill ${isActive ? "active" : ""}`}
                onClick={() => setSelectedDestination(dest.value)}
              >
                {dest.value === "all" ? "All Places" : dest.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          3. PACKAGES LIST & RESULTS HEADER
      ===================================================== */}
      <section className="packages-results-section">
        <div className="packages-results-header">
          <div className="results-count-box">
            <h2 className="results-count-title">
              <strong>{filteredPackages.length}</strong> Tour Packages Found
            </h2>
            <p className="results-count-subtitle">
              Handcrafted itineraries with verified hotel stays, private cabs & expert guides
            </p>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="clear-all-filters-btn"
              onClick={handleClearFilters}
            >
              <FaTimesCircle /> Reset Filters
            </button>
          )}
        </div>

        {/* Zero Results State */}
        {filteredPackages.length === 0 && (
          <div className="no-packages-found">
            <div className="no-pkg-icon">
              <FaSuitcaseRolling />
            </div>
            <h3>No tour packages matched your criteria</h3>
            <p>
              Try clearing your search keyword or switching filters to see available tour options across Uttar Pradesh.
            </p>
            <button
              type="button"
              className="no-pkg-reset-btn"
              onClick={handleClearFilters}
            >
              View All Tour Packages
            </button>
          </div>
        )}

        {/* Packages Cards Grid */}
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              {/* Card Image Thumbnail - Clean Photo with Ambient Vignette */}
              <div className="package-card-media">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="package-card-img"
                  loading="lazy"
                />
                <div className="package-media-gradient"></div>

                {/* Duration at Bottom-Right (No Background Pill) */}
                <div className="package-duration-pill">
                  <FaClock className="duration-icon" /> {pkg.duration}
                </div>
              </div>

              {/* Card Body - Clean, High-Quality & Professional */}
              <div className="package-card-body">
                <div className="package-meta-row">
                  <div className="package-rating">
                    <FaStar className="star-icon" />
                    <strong>{pkg.rating}</strong>
                    <span className="rating-count">({pkg.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="package-card-title">{pkg.title}</h3>

                {/* Direct Destination Link - Clean Minimal Style */}
                <div className="package-destination-row">
                  <Link
                    to={pkg.cityRoute}
                    className="card-city-page-btn"
                    title={`View ${pkg.destination} Page`}
                  >
                    <span className="city-btn-text">
                      <FaMapMarkerAlt className="city-pin" /> View {pkg.destination} Page
                    </span>
                  </Link>
                </div>
              </div>

              {/* Card Footer / Pricing & Actions */}
              <div className="package-card-footer">
                <div className="package-price-box">
                  <span className="price-label">Starting from</span>
                  <div className="price-values">
                    <span className="original-price">
                      ₹{pkg.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="discounted-price">
                      ₹{pkg.discountedPrice.toLocaleString("en-IN")}
                    </span>
                    {pkg.discountPercentage && (
                      <span className="price-discount-pill">
                        {pkg.discountPercentage}% OFF
                      </span>
                    )}
                  </div>
                  <span className="price-subtext">per person / twin sharing</span>
                </div>

                <div className="package-actions-group">
                  <button
                    type="button"
                    className="btn-package-details"
                    onClick={() => setSelectedPackage(pkg)}
                    title={`View ${pkg.title} details`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          4. INTERACTIVE ITINERARY & DETAILS MODAL
      ===================================================== */}
      {selectedPackage && (
        <div
          className="pkg-modal-backdrop"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="pkg-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="pkg-modal-header">
              <div className="modal-header-meta">
                <span className="modal-header-dest">
                  <FaMapMarkerAlt /> {selectedPackage.destination}, Uttar Pradesh
                </span>
                <span className="modal-header-dot">•</span>
                <span className="modal-header-duration">
                  <FaClock /> {selectedPackage.duration}
                </span>
                {selectedPackage.badge && (
                  <>
                    <span className="modal-header-dot">•</span>
                    <span className="modal-header-tag">{selectedPackage.badge}</span>
                  </>
                )}
              </div>
              <button
                type="button"
                className="pkg-modal-close-btn"
                onClick={() => setSelectedPackage(null)}
                aria-label="Close dialog"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Body */}
            <div className="pkg-modal-body">
              {/* Hero Banner & Summary Split */}
              <div className="modal-hero-split">
                <div className="modal-banner-container">
                  <img
                    src={selectedPackage.image}
                    alt={selectedPackage.title}
                    className="modal-banner-img"
                  />
                  <Link
                    to={`/gallery/${selectedPackage.destination.toLowerCase()}`}
                    className="modal-img-gallery-chip"
                    title={`Explore ${selectedPackage.destination} Photo Gallery`}
                  >
                    <FaImages /> View Photo Gallery
                  </Link>
                </div>

                <div className="modal-title-summary">
                  <h2>{selectedPackage.title}</h2>
                  <p className="modal-tagline">{selectedPackage.tagline}</p>

                  <div className="modal-price-strip">
                    <div className="modal-price-left">
                      <span className="modal-price-caption">Starting Package Price</span>
                      <div className="modal-price-numbers">
                        <span className="modal-cut-price">
                          ₹{selectedPackage.originalPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="modal-main-price">
                          ₹{selectedPackage.discountedPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="modal-save-pill">
                          {selectedPackage.discountPercentage}% OFF
                        </span>
                      </div>
                      <span className="modal-price-note">per person / twin sharing • verified inclusions</span>
                    </div>

                    <div className="modal-cta-buttons-group">
                      <a
                        href={generateWhatsAppUrl(selectedPackage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-wa-cta-btn"
                      >
                        <FaWhatsapp /> Book on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Tour Highlights & Included Features */}
              <div className="modal-section-block">
                <h3 className="section-title">
                  <FaTag /> Key Tour Highlights & Features
                </h3>
                <div className="modal-inclusions-chips">
                  <span className="inclusion-chip">
                    <FaHotel /> 4-Star Verified Stay
                  </span>
                  <span className="inclusion-chip">
                    <FaCar /> Dedicated AC Cab
                  </span>
                  <span className="inclusion-chip">
                    <FaUtensils /> Daily Breakfast
                  </span>
                  <span className="inclusion-chip">
                    <FaUserTie /> Expert Local Guide
                  </span>
                </div>

                <ul className="modal-highlights-list">
                  {selectedPackage.highlights.map((item, idx) => (
                    <li key={idx}>
                      <FaCheck className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Day-by-Day Itinerary */}
              <div className="modal-section-block">
                <h3 className="section-title">
                  <FaCalendarAlt /> Detailed Day-wise Itinerary
                </h3>
                <div className="itinerary-timeline">
                  {selectedPackage.itinerary.map((item) => (
                    <div key={item.day} className="timeline-item">
                      <div className="timeline-day-marker">Day {item.day}</div>
                      <div className="timeline-content">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="modal-split-inclusions">
                <div className="inclusions-column">
                  <h4>
                    <FaCheck className="icon-green" /> Package Inclusions
                  </h4>
                  <ul>
                    {selectedPackage.inclusions.map((inc, i) => (
                      <li key={i}>{inc}</li>
                    ))}
                  </ul>
                </div>

                <div className="exclusions-column">
                  <h4>
                    <FaTimes className="icon-red" /> Exclusions
                  </h4>
                  <ul>
                    {selectedPackage.exclusions.map((exc, i) => (
                      <li key={i}>{exc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Need Customization Box */}
              <div className="modal-customization-note">
                <FaInfoCircle className="note-icon" />
                <div>
                  <strong>Want to customize this tour?</strong>
                  <p>
                    All our Uttar Pradesh tour packages can be tailored to your flight/train timings, hotel category preferences, and group size. Speak directly to our travel experts on WhatsApp at <strong>+91 6397432030</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Sticky Bottom */}
            <div className="pkg-modal-footer">
              <div className="modal-footer-nav-group">
                <Link
                  to={selectedPackage.cityRoute}
                  className="modal-footer-nav-btn"
                  title={`Open ${selectedPackage.destination} Guide Page`}
                >
                  <FaMapMarkerAlt /> {selectedPackage.destination} Guide
                </Link>

                <Link
                  to={`/gallery/${selectedPackage.destination.toLowerCase()}`}
                  className="modal-footer-gallery-btn"
                  title={`View ${selectedPackage.destination} Photo Gallery`}
                >
                  <FaImages /> {selectedPackage.destination} Gallery
                </Link>
              </div>

              <div className="modal-footer-right-actions">
                <button
                  type="button"
                  className="modal-footer-back-btn"
                  onClick={() => setSelectedPackage(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
