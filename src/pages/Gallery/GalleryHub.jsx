import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaTimes,
  FaExpand,
  FaDownload,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaThLarge,
  FaColumns,
  FaCamera,
  FaTag,
  FaBorderAll,
  FaLandmark,
  FaFire,
  FaPray,
  FaMonument,
  FaWater,
  FaPlaceOfWorship,
  FaFortAwesome,
} from "react-icons/fa";
import { GALLERY_ITEMS, DESTINATION_PILLS } from "./galleryData";
import "./GalleryHub.css";

// Hero photo background
import heroBg from "../../assets/footer/footer-bimg.jpg";

const PILL_ICONS = {
  all: FaBorderAll,
  Agra: FaLandmark,
  Varanasi: FaFire,
  Ayodhya: FaPray,
  Lucknow: FaMonument,
  "Ghats & Rivers": FaWater,
  "Temples & Spiritual": FaPlaceOfWorship,
  "Monuments & Heritage": FaFortAwesome,
};

export default function GalleryHub() {
  const location = useLocation();
  const navigate = useNavigate();
  const { place } = useParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);
  const [columnsCount, setColumnsCount] = useState(3); // 3 or 4 columns
  const searchInputRef = useRef(null);

  // Sync with URL query or route parameter (e.g. /gallery/agra or /gallery?search=varanasi)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get("search");
    const destParam = searchParams.get("destination");

    if (place) {
      const lower = place.toLowerCase();
      if (lower.includes("taj") || lower.includes("agra")) {
        setActiveCategory("Agra");
      } else if (lower.includes("varanasi")) {
        setActiveCategory("Varanasi");
      } else if (lower.includes("ayodhya")) {
        setActiveCategory("Ayodhya");
      } else if (lower.includes("lucknow")) {
        setActiveCategory("Lucknow");
      }
    } else if (queryParam) {
      setSearchQuery(queryParam);
    } else if (destParam) {
      setActiveCategory(destParam);
    }
  }, [place, location.search]);


  // Filter photos based on search query and category pill
  const filteredPhotos = useMemo(() => {
    const cleanQuery = searchQuery.trim().toLowerCase();

    return GALLERY_ITEMS.filter((item) => {
      // 1. Category / Destination Filter
      let matchesCategory = true;
      if (activeCategory !== "all") {
        if (
          activeCategory === "Agra" ||
          activeCategory === "Varanasi" ||
          activeCategory === "Ayodhya" ||
          activeCategory === "Lucknow"
        ) {
          matchesCategory = item.destination.toLowerCase() === activeCategory.toLowerCase();
        } else {
          matchesCategory = item.category === activeCategory;
        }
      }

      // 2. Search Query Filter
      let matchesSearch = true;
      if (cleanQuery) {
        const titleMatch = item.title.toLowerCase().includes(cleanQuery);
        const destMatch = item.destination.toLowerCase().includes(cleanQuery);
        const locMatch = item.location.toLowerCase().includes(cleanQuery);
        const descMatch = item.description.toLowerCase().includes(cleanQuery);
        const tagMatch = item.tags.some((tag) => tag.toLowerCase().includes(cleanQuery));

        matchesSearch = titleMatch || destMatch || locMatch || descMatch || tagMatch;
      }

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Currently opened photo in lightbox modal
  const activePhoto =
    selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex]
      ? filteredPhotos[selectedPhotoIndex]
      : null;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;

      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        handleNextPhoto();
      } else if (e.key === "ArrowLeft") {
        handlePrevPhoto();
      }
    };

    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handleNextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  };

  // High-Resolution Download Handler
  const handleDownload = async (e, photo) => {
    if (e) e.stopPropagation();
    if (!photo) return;

    try {
      setDownloadingId(photo.id);
      const response = await fetch(photo.image);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      const cleanTitle = photo.title.toLowerCase().replace(/[^a-z0-9]/g, "-");
      link.download = `TourUP-${photo.destination}-${cleanTitle}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.warn("Direct download fallback:", err);
      const link = document.createElement("a");
      link.href = photo.image;
      link.download = `${photo.title}.jpg`;
      link.target = "_blank";
      link.click();
    } finally {
      setTimeout(() => setDownloadingId(null), 700);
    }
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
    if (place) {
      navigate("/gallery", { replace: true });
    }
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    setActiveCategory("all");
    setSelectedPhotoIndex(null);
  };

  return (
    <div className="unsplash-gallery-hub">
      {/* =====================================================
          1. HERO HEADER (Real Unsplash Full-Bleed Photograph)
      ===================================================== */}
      <section
        className="editorial-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="editorial-hero-overlay"></div>

        <div className="editorial-hero-container">
          <div className="editorial-hero-content">
            <span className="editorial-tagline">
              Official Photography Archive
            </span>

            <h1 className="editorial-title">
              Explore Uttar Pradesh in High Resolution
            </h1>

            <p className="editorial-lead">
              A curated photographic collection capturing the sacred ghats of Kashi,
              the eternal marble of Agra, the spiritual splendor of Ayodhya, and the regal
              heritage of Lucknow.
            </p>

            {/* REAL UNSPLASH SEARCH BAR */}
            <div className="editorial-search-wrapper">
              <div className="editorial-search-bar">
                <FaSearch className="editorial-search-icon" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, ghats, monuments (e.g. Varanasi, Taj Mahal, Ayodhya, Fort)..."
                  className="editorial-search-input"
                  aria-label="Search photos"
                />

                {searchQuery && (
                  <button
                    type="button"
                    className="editorial-clear-btn"
                    onClick={() => setSearchQuery("")}
                    title="Clear search"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              {/* TRENDING SEARCH SUGGESTIONS */}
              <div className="editorial-trending-bar">
                <span className="trending-title">Trending Searches:</span>
                {[
                  "Taj Mahal",
                  "Varanasi Ghats",
                  "Ganga Aarti",
                  "Ram Mandir",
                  "Bara Imambara",
                  "Saryu River",
                ].map((term) => (
                  <button
                    key={term}
                    type="button"
                    className="trending-chip"
                    onClick={() => {
                      setSearchQuery(term);
                      setActiveCategory("all");
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. CATEGORY TABS & VIEW TOOLBAR (Sticky Unsplash Bar)
      ===================================================== */}
      <div className="editorial-toolbar-sticky">
        <div className="editorial-toolbar-container">
          {/* Horizontal Tabs */}
          <div className="editorial-tabs-list">
            {DESTINATION_PILLS.map((pill) => {
              const isActive = activeCategory === pill.value;
              const IconComp = PILL_ICONS[pill.value] || FaLandmark;
              return (
                <button
                  key={pill.value}
                  type="button"
                  className={`editorial-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setActiveCategory(pill.value);
                  }}
                >
                  <IconComp className="tab-icon" />
                  <span className="tab-label">{pill.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid Layout Toggle */}
          <div className="editorial-view-controls">
            <button
              type="button"
              className={`view-mode-btn ${columnsCount === 3 ? "active" : ""}`}
              onClick={() => setColumnsCount(3)}
              title="3 Column View"
              aria-label="3 Column View"
            >
              <FaThLarge />
            </button>
            <button
              type="button"
              className={`view-mode-btn ${columnsCount === 4 ? "active" : ""}`}
              onClick={() => setColumnsCount(4)}
              title="4 Column Compact View"
              aria-label="4 Column View"
            >
              <FaColumns />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          3. ACTIVE FILTER STATUS (Clean label, NO numbers)
      ===================================================== */}
      {(searchQuery || activeCategory !== "all") && (
        <div className="editorial-status-bar">
          <div className="editorial-status-container">
            <div className="editorial-status-text">
              <span className="status-desc">
                {activeCategory !== "all" && (
                  <>Showing photographs in <strong>{activeCategory}</strong></>
                )}
                {searchQuery && (
                  <> {activeCategory !== "all" ? "matching" : "Showing photographs matching"} "<strong>{searchQuery}</strong>"</>
                )}
              </span>
            </div>

            <button
              type="button"
              className="editorial-reset-action"
              onClick={handleClearFilters}
            >
              <FaTimes /> Clear Filter
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          5. AUTHENTIC UNSPLASH PHOTO MASONRY
      ===================================================== */}
      <main className="editorial-gallery-main">
        <div className="editorial-gallery-container">
          {filteredPhotos.length > 0 ? (
            <div
              className={`editorial-masonry-grid columns-${columnsCount}`}
            >
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="editorial-photo-card"
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  <div className="photo-media-wrapper">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      loading="lazy"
                      className="photo-actual-img"
                    />

                    {/* Unsplash-Style Hover Overlay */}
                    <div className="photo-hover-overlay">
                      {/* Top Bar: Location & Download */}
                      <div className="photo-hover-top">
                        <span className="photo-destination-badge">
                          <FaMapMarkerAlt /> {photo.destination}
                        </span>

                        <button
                          type="button"
                          className="photo-quick-download-btn"
                          title="Download High-Res"
                          aria-label="Download Photo"
                          onClick={(e) => handleDownload(e, photo)}
                        >
                          {downloadingId === photo.id ? (
                            <FaCheck />
                          ) : (
                            <FaDownload />
                          )}
                        </button>
                      </div>

                      {/* Bottom Bar: Title & Direct Guide Link */}
                      <div className="photo-hover-bottom">
                        <div className="photo-info-group">
                          <h2 className="photo-title-text">{photo.title}</h2>
                          <p className="photo-caption-text">{photo.description}</p>
                        </div>

                        <div className="photo-actions-row">
                          <Link
                            to={photo.cityRoute}
                            className="photo-guide-link"
                            onClick={(e) => e.stopPropagation()}
                            title={`Read ${photo.destination} Guide`}
                          >
                            <span>Explore Guide</span>
                            <FaArrowRight />
                          </Link>

                          <button
                            type="button"
                            className="photo-expand-icon-btn"
                            title="Open Fullscreen"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPhotoIndex(index);
                            }}
                          >
                            <FaExpand />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ================= EMPTY SEARCH STATE ================= */
            <div className="editorial-empty-state">
              <div className="empty-state-graphic">
                <FaCamera />
              </div>
              <h2>No Photographs Found</h2>
              <p>
                We couldn't find any destination matching "<strong>{searchQuery}</strong>".
                Try selecting an iconic city or clearing your search.
              </p>

              <div className="empty-quick-pills">
                {["Agra", "Varanasi", "Ayodhya", "Lucknow", "Taj Mahal", "Ghats"].map((city) => (
                  <button
                    key={city}
                    type="button"
                    className="empty-pill-btn"
                    onClick={() => {
                      setSearchQuery(city);
                      setActiveCategory("all");
                    }}
                  >
                    {city}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="empty-restore-btn"
                onClick={handleClearFilters}
              >
                Reset Search & View All Photos
              </button>
            </div>
          )}
        </div>
      </main>

      {/* =====================================================
          6. LUXURY EDITORIAL LIGHTBOX MODAL
      ===================================================== */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="editorial-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Previous Photo Button */}
            <button
              type="button"
              className="modal-nav-arrow prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevPhoto();
              }}
              aria-label="Previous Photograph (Left Arrow)"
              title="Previous Photograph (Left Arrow)"
            >
              <FaChevronLeft />
            </button>

            {/* Next Photo Button */}
            <button
              type="button"
              className="modal-nav-arrow next"
              onClick={(e) => {
                e.stopPropagation();
                handleNextPhoto();
              }}
              aria-label="Next Photograph (Right Arrow)"
              title="Next Photograph (Right Arrow)"
            >
              <FaChevronRight />
            </button>

            {/* Modal Dialog Card */}
            <motion.div
              className="editorial-modal-card"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header */}
              <div className="modal-top-header">
                <div className="modal-header-meta">
                  <div className="modal-title-stack">
                    <h2 className="modal-title-heading">{activePhoto.title}</h2>
                    <span className="modal-location-sub">
                      <FaMapMarkerAlt className="modal-pin-icon" /> {activePhoto.location}
                    </span>
                  </div>
                </div>

                <div className="modal-header-actions">
                  <Link
                    to={activePhoto.cityRoute}
                    className="modal-guide-action"
                    title={`Explore ${activePhoto.destination} Guide`}
                  >
                    <span>{activePhoto.destination} Guide</span>
                    <FaArrowRight />
                  </Link>

                  <button
                    type="button"
                    className="modal-download-action"
                    onClick={(e) => handleDownload(e, activePhoto)}
                    title="Download High-Res Photo"
                  >
                    {downloadingId === activePhoto.id ? (
                      <>
                        <FaCheck /> <span>Downloaded</span>
                      </>
                    ) : (
                      <>
                        <FaDownload /> <span>Download HD</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="modal-close-action"
                    onClick={() => setSelectedPhotoIndex(null)}
                    aria-label="Close Preview"
                    title="Close (ESC)"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Modal Photo Stage */}
              <div className="modal-photo-stage">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="modal-display-img"
                />
              </div>

              {/* Modal Bottom Metadata - Clean Caption Only */}
              {activePhoto.description && (
                <div className="modal-bottom-details">
                  <p className="modal-description-paragraph">
                    {activePhoto.description}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
