import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./varanasi.css";

import varanasiHeroBg from "../../assets/gallery/varanasi/varanasi4.jpg";
import dashImage from "./dash.jpg";
import AssiGhatImage from "./AssiGhat.jpg";
import ManikarnikaGhatImage from "./ManikarnikaGhat.jpg";
import KedarGhatImage from "./KedarGhat.jpg";
import PanchgangaGhatImage from "./PanchgangaGhat.jpg";
import ScindiaGhatImage from "./ScindiaGhat.jpg";
import banarasiPaanImage from "./banarasi-paan.jpg";

const Varanasi = () => {
  const [showMore, setShowMore] = useState(false);
  const [showAllGhats, setShowAllGhats] = useState(false);
  const [selectedGhat, setSelectedGhat] = useState(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedGhat) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSelectedGhat(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedGhat]);

  const ghats = {
    dashashwamedh: {
      image: dashImage,
      tag: "RIVERSIDE HERITAGE",
      title: "Dashashwamedh Ghat",
      description:
        "Dashashwamedh Ghat is one of the most prominent ghats of Varanasi. It is especially famous for the evening Ganga Aarti, when lamps, prayers, bells and devotional music create a memorable atmosphere beside the Ganga.",
    },

    assi: {
      image: AssiGhatImage,
      tag: "SUNRISE EXPERIENCE",
      title: "Assi Ghat",
      description:
        "Assi Ghat is one of the southern ghats of Varanasi and is known for its peaceful atmosphere. It is a popular place to experience sunrise, morning rituals and the cultural life of the city.",
    },

    manikarnika: {
      image: ManikarnikaGhatImage,
      tag: "SACRED GHAT",
      title: "Manikarnika Ghat",
      description:
        "Manikarnika Ghat is one of the most significant ghats in Varanasi and has deep spiritual importance. It is closely connected with the city's ancient traditions surrounding life, death and liberation.",
    },

    kedar: {
      image: KedarGhatImage,
      tag: "HERITAGE",
      title: "Kedar Ghat",
      description:
        "Kedar Ghat is known for its distinctive character and riverside setting. The ghat offers visitors another beautiful perspective of the historic Ganga riverfront.",
    },

    panchganga: {
      image: PanchgangaGhatImage,
      tag: "HERITAGE",
      title: "Panchganga Ghat",
      description:
        "Panchganga Ghat is a historic riverside location associated with the spiritual and cultural heritage of Varanasi.",
    },

    scindia: {
      image: ScindiaGhatImage,
      tag: "RIVERSIDE",
      title: "Scindia Ghat",
      description:
        "Scindia Ghat is known for its historic riverside surroundings and distinctive architecture along the Ganga.",
    },
  };

  return (
    <main className="varanasi-page">

      {/* ================= HERO ================= */}

      <section className="varanasi-hero">
        <div className="hero-bg-wrapper">
          <img
            src={varanasiHeroBg}
            alt="Sacred Ganga River and Historic Ghats of Varanasi"
            className="hero-bg-img"
          />
          <div className="varanasi-hero-overlay"></div>
        </div>

        <div className="varanasi-hero-inner">
          <div className="varanasi-hero-content">


            <motion.h1
              className="hero-main-title"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Discover the Soul of <br />
              <span className="hero-title-highlight">Varanasi</span>
            </motion.h1>

            <motion.p
              className="hero-lead-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              The world&apos;s oldest living city where the sacred Ganga, timeless riverside ghats,
              reverberating evening Maha Aarti, and millennia of spiritual heritage flow together.
            </motion.p>

            <motion.div
              className="hero-action-buttons"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#about-varanasi" className="btn-hero-primary">
                Explore Varanasi
              </a>
              <a href="#ghats-section" className="btn-hero-secondary">
                View Sacred Ghats
              </a>
            </motion.div>

          </div>
        </div>

        <div className="hero-scroll-cue">
          <a href="#about-varanasi" aria-label="Scroll to content">
            <span className="scroll-arrow"></span>
          </a>
        </div>
      </section>


      {/* ================= INTRO ================= */}

      <section
        className="varanasi-intro"
        id="about-varanasi"
      >

        <div className="varanasi-section-container">

          <motion.div
            className="intro-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            DISCOVER VARANASI
          </motion.div>

          <div className="intro-grid">

            <motion.div
              className="intro-heading"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >

              <h2>
                Where
                <br />
                <span>time stands still.</span>
              </h2>

            </motion.div>

            <motion.div
              className="intro-description"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >

              <p>
                Varanasi, also known as Banaras and Kashi,
                is one of India's most ancient and culturally
                significant cities. Situated along the sacred
                River Ganga, the city has attracted pilgrims,
                travellers, artists and seekers for centuries.
              </p>

              <p>
                Its narrow lanes, centuries-old temples,
                riverside ghats, traditional music and vibrant
                everyday life create a city that feels both
                ancient and alive.
              </p>

              {showMore && (
                <div className="read-more-content">

                  <p>
                    Varanasi is deeply connected with India's
                    spiritual traditions. The city is known for
                    its rituals on the Ganga, its temples,
                    classical music and distinctive cultural identity.
                  </p>

                  <p>
                    From the quiet moments of sunrise by the
                    river to the glowing lamps of the evening
                    Ganga Aarti, Varanasi offers experiences
                    that stay with visitors long after they leave.
                  </p>

                </div>
              )}

              <button
                className="read-more-btn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore
                  ? "Read Less ↑"
                  : "Read More →"}
              </button>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ================= GANGA ================= */}

      <section className="ganga-section">
        <div className="ganga-container">
          <motion.div
            className="ganga-image"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1200&q=85"
              alt="Sacred Ganga River at Varanasi"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="ganga-content"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="ganga-badge">THE SACRED RIVER</span>

            <h2>
              Life begins <br />
              with the <em>Ganga.</em>
            </h2>

            <p>
              The Ganga is the heart of Varanasi. Every morning,
              the riverfront comes alive with prayers, boats,
              rituals and the quiet rhythm of everyday life.
            </p>

            <p>
              Watching the first rays of sunlight fall across
              the river is one of the most memorable experiences
              in the city.
            </p>


          </motion.div>
        </div>
      </section>


      {/* ================= GHATS ================= */}

      <section className="ghats-section" id="ghats-section">

        <div className="varanasi-section-container">

          <motion.div
            className="ghats-top"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >

            <div className="ghats-title">

              <div>

                <span className="gold-label">
                  RIVERSIDE HERITAGE
                </span>

                <h2>
                  Walk along the
                  <br />
                  <em>Ghats.</em>
                </h2>

              </div>

            </div>

            <p className="ghats-intro">
              Discover the timeless riverfront of Varanasi,
              where ancient traditions, spirituality and
              everyday life meet the sacred Ganga.
            </p>

          </motion.div>


          <div className="ghats-grid">

            {/* 01 */}

            <motion.article
              className="ghat-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >

              <div className="ghat-image">

                <img
                  src={dashImage}
                  alt="Dashashwamedh Ghat"
                  loading="lazy"
                />

                <span className="ghat-number">
                  01
                </span>

              </div>

              <div className="ghat-content">

                <span className="ghat-location">
                  RIVERSIDE
                </span>

                <h3>
                  Dashashwamedh Ghat
                </h3>

                <p>
                  Famous for its spectacular evening
                  Ganga Aarti and vibrant atmosphere
                  along the sacred river.
                </p>

                <button
                  className="ghat-link"
                  onClick={() =>
                    setSelectedGhat("dashashwamedh")
                  }
                >
                  Read More <span>→</span>
                </button>

              </div>

            </motion.article>


            {/* 02 */}

            <motion.article
              className="ghat-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >

              <div className="ghat-image">

                <img
                  src={AssiGhatImage}
                  alt="Assi Ghat"
                  loading="lazy"
                />

                <span className="ghat-number">
                  02
                </span>

              </div>

              <div className="ghat-content">

                <span className="ghat-location">
                  SUNRISE
                </span>

                <h3>
                  Assi Ghat
                </h3>

                <p>
                  A peaceful riverside destination known
                  for sunrise views, morning rituals and
                  cultural life.
                </p>

                <button
                  className="ghat-link"
                  onClick={() =>
                    setSelectedGhat("assi")
                  }
                >
                  Read More <span>→</span>
                </button>

              </div>

            </motion.article>


            {/* 03 */}

            <motion.article
              className="ghat-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >

              <div className="ghat-image">

                <img
                  src={ManikarnikaGhatImage}
                  alt="Manikarnika Ghat"
                  loading="lazy"
                />

                <span className="ghat-number">
                  03
                </span>

              </div>

              <div className="ghat-content">

                <span className="ghat-location">
                  SACRED GHAT
                </span>

                <h3>
                  Manikarnika Ghat
                </h3>

                <p>
                  One of Varanasi's most significant
                  ghats, deeply connected with the city's
                  spiritual traditions.
                </p>

                <button
                  className="ghat-link"
                  onClick={() =>
                    setSelectedGhat("manikarnika")
                  }
                >
                  Read More <span>→</span>
                </button>

              </div>

            </motion.article>


            {/* 04 */}

            <motion.article
              className="ghat-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >

              <div className="ghat-image">

                <img
                  src={KedarGhatImage}
                  alt="Kedar Ghat"
                  loading="lazy"
                />

                <span className="ghat-number">
                  04
                </span>

              </div>

              <div className="ghat-content">

                <span className="ghat-location">
                  HERITAGE
                </span>

                <h3>
                  Kedar Ghat
                </h3>

                <p>
                  Known for its distinctive architecture
                  and beautiful views of the Ganga riverfront.
                </p>

                <button
                  className="ghat-link"
                  onClick={() =>
                    setSelectedGhat("kedar")
                  }
                >
                  Read More <span>→</span>
                </button>

              </div>

            </motion.article>


            {/* EXTRA */}

            {showAllGhats && (
              <>

                {/* 05 */}

                <motion.article
                  className="ghat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >

                  <div className="ghat-image">

                    <img
                      src={PanchgangaGhatImage}
                      alt="Panchganga Ghat"
                      loading="lazy"
                    />

                    <span className="ghat-number">
                      05
                    </span>

                  </div>

                  <div className="ghat-content">

                    <span className="ghat-location">
                      HERITAGE
                    </span>

                    <h3>
                      Panchganga Ghat
                    </h3>

                    <p>
                      A historic riverside ghat associated
                      with Varanasi's rich spiritual and
                      cultural traditions.
                    </p>

                    <button
                      className="ghat-link"
                      onClick={() =>
                        setSelectedGhat("panchganga")
                      }
                    >
                      Read More <span>→</span>
                    </button>

                  </div>

                </motion.article>


                {/* 06 */}

                <motion.article
                  className="ghat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >

                  <div className="ghat-image">

                    <img
                      src={ScindiaGhatImage}
                      alt="Scindia Ghat"
                      loading="lazy"
                    />

                    <span className="ghat-number">
                      06
                    </span>

                  </div>

                  <div className="ghat-content">

                    <span className="ghat-location">
                      RIVERSIDE
                    </span>

                    <h3>
                      Scindia Ghat
                    </h3>

                    <p>
                      A historic ghat known for its
                      riverside setting and distinctive
                      architectural character.
                    </p>

                    <button
                      className="ghat-link"
                      onClick={() =>
                        setSelectedGhat("scindia")
                      }
                    >
                      Read More <span>→</span>
                    </button>

                  </div>

                </motion.article>

              </>
            )}

          </div>


          <div className="ghats-footer">

            <motion.button
              className="view-all-ghats"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                setShowAllGhats(!showAllGhats)
              }
            >
              {showAllGhats
                ? "Show Less"
                : "View All Ghats"}

              <span>
                {showAllGhats ? "↑" : "→"}
              </span>

            </motion.button>

          </div>

        </div>


        {/* ================= MODAL ================= */}

        {selectedGhat && (
          <div
            className="ghat-modal"
            onClick={() => setSelectedGhat(null)}
          >

            <div
              className="ghat-modal-box"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <button
                className="ghat-close"
                onClick={() =>
                  setSelectedGhat(null)
                }
              >
                ×
              </button>

              <img
                src={ghats[selectedGhat].image}
                alt={ghats[selectedGhat].title}
              />

              <div className="ghat-modal-content">

                <span>
                  {ghats[selectedGhat].tag}
                </span>

                <h2>
                  {ghats[selectedGhat].title}
                </h2>

                <p>
                  {ghats[selectedGhat].description}
                </p>

              </div>

            </div>

          </div>
        )}

      </section>


      {/* ================= CULTURE ================= */}

      <section className="culture-section">

        <div className="varanasi-section-container">

          <motion.div
            className="culture-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >

            <div className="culture-title">

              <div>

                <span className="gold-label">
                  CULTURE & HERITAGE
                </span>

                <h2>
                  A city rich in
                  <br />
                  <em>living traditions.</em>
                </h2>

              </div>

            </div>

            <p className="culture-intro">
              Varanasi&apos;s culture can be experienced in
              its music, temples, crafts, food, festivals
              and everyday life.
            </p>

          </motion.div>


          <div className="culture-grid">

            <motion.div
              className="culture-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <span>01</span>
              <h3>Spirituality</h3>
              <p>
                Ancient spiritual traditions remain an
                important part of everyday life in Varanasi.
              </p>
              <div className="culture-arrow">↗</div>
            </motion.div>

            <motion.div
              className="culture-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              <span>02</span>
              <h3>Classical Music</h3>
              <p>
                Varanasi has a long association with Indian
                classical music and traditional performing arts.
              </p>
              <div className="culture-arrow">↗</div>
            </motion.div>

            <motion.div
              className="culture-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.24 }}
            >
              <span>03</span>
              <h3>Banarasi Weaving</h3>
              <p>
                Traditional Banarasi textiles are known
                for detailed craftsmanship and elegant designs.
              </p>
              <div className="culture-arrow">↗</div>
            </motion.div>

            <motion.div
              className="culture-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.32 }}
            >
              <span>04</span>
              <h3>Festivals</h3>
              <p>
                Festivals bring colour, music, lights and
                celebrations to the historic streets of the city.
              </p>
              <div className="culture-arrow">↗</div>
            </motion.div>

          </div>

        </div>

      </section>


      {/* ================= FOOD ================= */}

      <section className="food-section">
        <div className="varanasi-section-container">
          <div className="food-container">

            <motion.div
              className="food-content"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="gold-label">
                TASTE OF VARANASI
              </span>

              <h2>
                Taste the <br />
                <em>Banarasi spirit.</em>
              </h2>

              <p>
                Food in Varanasi is a vibrant journey through centuries of heritage.
                From traditional morning kachori-jalebi to refreshing clay-cup lassi,
                rich tamatar chaat, and the iconic sweet Banarasi paan, every lane
                offers flavours deeply rooted in the city&apos;s timeless spirit.
              </p>

              <div className="food-grid">
                <div className="food-item-pill">
                  <span className="food-icon">🍃</span>
                  <div className="food-item-text">
                    <strong>Banarasi Paan</strong>
                    <small>Iconic betel leaf with gulkand</small>
                  </div>
                </div>

                <div className="food-item-pill">
                  <span className="food-icon">🥘</span>
                  <div className="food-item-text">
                    <strong>Kachori Sabzi</strong>
                    <small>Crispy morning breakfast with jalebi</small>
                  </div>
                </div>

                <div className="food-item-pill">
                  <span className="food-icon">🥛</span>
                  <div className="food-item-text">
                    <strong>Kulhad Lassi</strong>
                    <small>Thick churned curd with rabdi</small>
                  </div>
                </div>

                <div className="food-item-pill">
                  <span className="food-icon">🍲</span>
                  <div className="food-item-text">
                    <strong>Tamatar Chaat</strong>
                    <small>Varanasi&apos;s spicy tangy street delicacy</small>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="food-image-wrapper"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="food-image-frame">
                <img
                  src={banarasiPaanImage}
                  alt="Authentic Royal Banarasi Paan"
                  loading="lazy"
                />
                <div className="food-badge-overlay">
                  <span className="badge-tag">GI-TAGGED</span>
                  <span className="badge-title">Famous Banarasi Paan</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="experience-section">
        <div className="varanasi-section-container">

          <motion.div
            className="experience-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="gold-label">
              EXPERIENCE
            </span>

            <h2>
              Don&apos;t just visit. <br />
              <em>Experience Varanasi.</em>
            </h2>

            <p className="experience-subtext">
              Immerse yourself in moments that capture the eternal spirit, ancient rhythm, and spiritual soul of Kashi.
            </p>
          </motion.div>

          <div className="experience-list">

            <motion.div
              className="experience-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="exp-num-badge">01</div>
              <div className="exp-info">
                <h3>Sunrise by the Ganga</h3>
                <p>
                  Watch the city wake up beside the sacred river as the golden morning light fills the ghats with prayers and stillness.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="experience-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="exp-num-badge">02</div>
              <div className="exp-info">
                <h3>Explore the Old Lanes</h3>
                <p>
                  Wander through the labyrinth of ancient narrow alleys (galis), discovering hidden shrines, traditional sweet shops, and vibrant Banarasi life.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="experience-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="exp-num-badge">03</div>
              <div className="exp-info">
                <h3>Evening by the River</h3>
                <p>
                  Experience the awe-inspiring Ganga Maha Aarti at dusk, illuminated by glowing brass lamps, resonant bells, and chanting across the water.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ================= TRAVEL ================= */}

      <section className="travel-section">

        <div className="varanasi-section-container">

          <motion.div
            className="section-heading-row"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >

            <div>

              <span className="gold-label">
                PLAN YOUR JOURNEY
              </span>

              <h2>
                Know before
                <br />
                you <em>go.</em>
              </h2>

            </div>

          </motion.div>


          <div className="travel-grid">

            <motion.div
              className="travel-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span>01</span>
              <h3>Best Time</h3>
              <p>
                October to March is generally a comfortable
                period to explore Varanasi.
              </p>
            </motion.div>

            <motion.div
              className="travel-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>02</span>
              <h3>How to Reach</h3>
              <p>
                Varanasi has air, rail and road connections
                with major cities across India.
              </p>
            </motion.div>

            <motion.div
              className="travel-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span>03</span>
              <h3>Getting Around</h3>
              <p>
                Walking, e-rickshaws, auto-rickshaws and taxis
                are common ways to explore the city.
              </p>
            </motion.div>

          </div>

        </div>

      </section>




    </main>
  );
};

export default Varanasi;