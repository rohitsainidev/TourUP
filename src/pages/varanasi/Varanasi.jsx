import React, { useState } from "react";
import "./varanasi.css";

import dashImage from "./dash.jpg";
import AssiGhatImage from "./AssiGhat.jpg";
import ManikarnikaGhatImage from "./ManikarnikaGhat.jpg";
import KedarGhatImage from "./KedarGhat.jpg";
import PanchgangaGhatImage from "./PanchgangaGhat.jpg";
import ScindiaGhatImage from "./ScindiaGhat.jpg";

const Varanasi = () => {
  const [showMore, setShowMore] = useState(false);
  const [showAllGhats, setShowAllGhats] = useState(false);
  const [selectedGhat, setSelectedGhat] = useState(null);

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

        <div className="varanasi-hero-overlay"></div>

        <div className="varanasi-hero-content">

          <span className="hero-tag">
            UTTAR PRADESH
          </span>

          <div className="hero-line"></div>

          <h1>Varanasi</h1>

          <p>
            A timeless city where the sacred Ganga,
            ancient traditions and vibrant life flow together.
          </p>

          <a
            href="#about-varanasi"
            className="hero-button"
          >
            Explore Varanasi
            <span>↓</span>
          </a>

        </div>

        <div className="hero-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section
        className="varanasi-intro"
        id="about-varanasi"
      >

        <div className="varanasi-section-container">

          <div className="intro-label">
            <span>01</span>
            DISCOVER VARANASI
          </div>

          <div className="intro-grid">

            <div className="intro-heading">

              <h2>
                Where
                <br />
                <span>time stands still.</span>
              </h2>

            </div>

            <div className="intro-description">

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

            </div>

          </div>

        </div>

      </section>


      {/* ================= GANGA ================= */}

      <section className="ganga-section">

        <div className="ganga-image">

          <img
            src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1800&q=85"
            alt="Ganga River Varanasi"
          />

        </div>

        <div className="ganga-content">

          <span className="gold-label">
            THE SACRED RIVER
          </span>

          <h2>
            Life begins
            <br />
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

          <div className="ganga-stats">

            <div>
              <strong>80+</strong>
              <span>Ghats</span>
            </div>

            <div>
              <strong>3000+</strong>
              <span>Years of history</span>
            </div>

            <div>
              <strong>24×7</strong>
              <span>Life by the river</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= GHATS ================= */}

      <section className="ghats-section">

        <div className="varanasi-section-container">

          <div className="ghats-top">

            <div className="ghats-title">

              <span className="section-number">
                02
              </span>

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

          </div>


          <div className="ghats-grid">

            {/* 01 */}

            <article className="ghat-card">

              <div className="ghat-image">

                <img
                  src={dashImage}
                  alt="Dashashwamedh Ghat"
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

            </article>


            {/* 02 */}

            <article className="ghat-card">

              <div className="ghat-image">

                <img
                  src={AssiGhatImage}
                  alt="Assi Ghat"
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

            </article>


            {/* 03 */}

            <article className="ghat-card">

              <div className="ghat-image">

                <img
                  src={ManikarnikaGhatImage}
                  alt="Manikarnika Ghat"
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

            </article>


            {/* 04 */}

            <article className="ghat-card">

              <div className="ghat-image">

                <img
                  src={KedarGhatImage}
                  alt="Kedar Ghat"
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

            </article>


            {/* EXTRA */}

            {showAllGhats && (
              <>

                {/* 05 */}

                <article className="ghat-card">

                  <div className="ghat-image">

                    <img
                      src={PanchgangaGhatImage}
                      alt="Panchganga Ghat"
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

                </article>


                {/* 06 */}

                <article className="ghat-card">

                  <div className="ghat-image">

                    <img
                      src={ScindiaGhatImage}
                      alt="Scindia Ghat"
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

                </article>

              </>
            )}

          </div>


          <div className="ghats-footer">

            <button
              className="view-all-ghats"
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

            </button>

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

          <div className="culture-header">

            <span className="gold-label">
              CULTURE & HERITAGE
            </span>

            <h2>
              A city rich in
              <br />
              <em>living traditions.</em>
            </h2>

            <p>
              Varanasi's culture can be experienced in
              its music, temples, crafts, food, festivals
              and everyday life.
            </p>

          </div>


          <div className="culture-grid">

            <div className="culture-card">
              <span>01</span>
              <h3>Spirituality</h3>
              <p>
                Ancient spiritual traditions remain an
                important part of everyday life in Varanasi.
              </p>
              <div className="culture-arrow">↗</div>
            </div>

            <div className="culture-card">
              <span>02</span>
              <h3>Classical Music</h3>
              <p>
                Varanasi has a long association with Indian
                classical music and traditional performing arts.
              </p>
              <div className="culture-arrow">↗</div>
            </div>

            <div className="culture-card">
              <span>03</span>
              <h3>Banarasi Weaving</h3>
              <p>
                Traditional Banarasi textiles are known
                for detailed craftsmanship and elegant designs.
              </p>
              <div className="culture-arrow">↗</div>
            </div>

            <div className="culture-card">
              <span>04</span>
              <h3>Festivals</h3>
              <p>
                Festivals bring colour, music, lights and
                celebrations to the historic streets of the city.
              </p>
              <div className="culture-arrow">↗</div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOD ================= */}

      <section className="food-section">

        <div className="food-content">

          <span className="gold-label">
            TASTE OF VARANASI
          </span>

          <h2>
            Taste the
            <br />
            <em>Banarasi spirit.</em>
          </h2>

          <p>
            Food in Varanasi is an experience of its own.
            From traditional breakfast dishes to famous
            sweets and refreshing drinks, the city offers
            flavours deeply connected with local life.
          </p>

          <div className="food-list">
            <span>Banarasi Paan</span>
            <span>Kachori Sabzi</span>
            <span>Jalebi</span>
            <span>Lassi</span>
          </div>

        </div>

        <div className="food-image">

          <img
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=85"
            alt="Traditional Indian food"
          />

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="experience-section">

        <div className="varanasi-section-container">

          <div className="experience-heading">

            <span className="gold-label">
              EXPERIENCE
            </span>

            <h2>
              Don't just visit.
              <br />
              <em>Experience Varanasi.</em>
            </h2>

          </div>


          <div className="experience-list">

            <div className="experience-row">
              <span>01</span>

              <div>
                <h3>Sunrise by the Ganga</h3>
                <p>
                  Watch the city wake up beside the river
                  as the morning light fills the ghats.
                </p>
              </div>

              <b>→</b>
            </div>

            <div className="experience-row">
              <span>02</span>

              <div>
                <h3>Explore the Old Lanes</h3>
                <p>
                  Walk through the narrow lanes and discover
                  small shops, temples and local life.
                </p>
              </div>

              <b>→</b>
            </div>

            <div className="experience-row">
              <span>03</span>

              <div>
                <h3>Evening by the River</h3>
                <p>
                  Experience the changing colours of the river
                  as the city moves towards evening.
                </p>
              </div>

              <b>→</b>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TRAVEL ================= */}

      <section className="travel-section">

        <div className="varanasi-section-container">

          <div className="section-heading-row">

            <span className="section-number">
              03
            </span>

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

          </div>


          <div className="travel-grid">

            <div className="travel-card">
              <span>01</span>
              <h3>Best Time</h3>
              <p>
                October to March is generally a comfortable
                period to explore Varanasi.
              </p>
            </div>

            <div className="travel-card">
              <span>02</span>
              <h3>How to Reach</h3>
              <p>
                Varanasi has air, rail and road connections
                with major cities across India.
              </p>
            </div>

            <div className="travel-card">
              <span>03</span>
              <h3>Getting Around</h3>
              <p>
                Walking, e-rickshaws, auto-rickshaws and taxis
                are common ways to explore the city.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL ================= */}

      <section className="varanasi-final">

        <div className="final-overlay"></div>

        <div className="final-content">

          <span>
            DISCOVER THE TIMELESS CITY
          </span>

          <h2>
            Varanasi
            <br />
            <em>awaits.</em>
          </h2>

          <p>
            Come for the journey.
            <br />
            Stay for the experience.
          </p>

          <a href="#about-varanasi">
            Back to Top ↑
          </a>

        </div>

      </section>

    </main>
  );
};

export default Varanasi;