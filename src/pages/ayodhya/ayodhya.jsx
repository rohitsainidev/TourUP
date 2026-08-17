import React, { useState } from "react";
import "./ayodhya.css";

import ayodhyaImage from "./ayodhya.jpg";
import HanumangarhiImage from "./Hanumangarhi.jpg";
import sharyuGhatImage from "./sharyuGhat.jpg";
import kanakBhawanImage from "./KanakBhawan.jpg";
import DashrathMahalImage from "./DashrathMahal.jpg";
import RamkiPaidiImage from "./RamkiPaidi.jpg";

const places = [
  {
    id: 1,
    name: "Ram Mandir",
    location: "Ram Janmabhoomi, Ayodhya",
    image: ayodhyaImage,
    description:
      "Ram Mandir is a famous temple dedicated to Lord Rama. It is one of the main attractions of Ayodhya.",
  },
  {
    id: 2,
    name: "Hanuman Garhi",
    location: "Ayodhya, Uttar Pradesh",
    image: HanumangarhiImage,
    description:
      "Hanuman Garhi is a famous temple of Lord Hanuman. Visitors climb the steps to reach the temple.",
  },
  {
    id: 3,
    name: "Saryu Ghat",
    location: "Saryu River, Ayodhya",
    image: sharyuGhatImage,
    description:
      "Saryu Ghat is a peaceful place beside the Saryu River. It is beautiful during the evening aarti.",
  },
  {
    id: 4,
    name: "Kanak Bhawan",
    location: "Tulsi Nagar, Ayodhya",
    image: kanakBhawanImage,
    description:
      "Kanak Bhawan is a beautiful temple dedicated to Lord Rama and Goddess Sita.",
  },
  {
    id: 5,
    name: "Dashrath Mahal",
    location: "Ayodhya, Uttar Pradesh",
    image: DashrathMahalImage,
    description:
      "Dashrath Mahal is an important religious place in Ayodhya. It is linked with King Dashrath.",
  },
  {
    id: 6,
    name: "Ram Ki Paidi",
    location: "Saryu River, Ayodhya",
    image: RamkiPaidiImage,
    description:
      "Ram Ki Paidi is a group of beautiful ghats beside the Saryu River.",
  },
];

function Ayodhya() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="ayodhya-page">

      {/* ================= HERO ================= */}

      <section className="ayodhya-hero">

        <img
          src={ayodhyaImage}
          alt="Ayodhya"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="hero-tag">
            AYODHYA • UTTAR PRADESH
          </span>

          <h1>
            Explore <span>Ayodhya</span>
          </h1>

          <p>
            Visit temples, ghats and beautiful places in Ayodhya.
          </p>

          <a href="#places" className="hero-button">
            Explore Places →
          </a>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="ayodhya-intro section-container">

        <div className="intro-image">

          <img
            src={ayodhyaImage}
            alt="Ram Mandir Ayodhya"
          />

          <div className="image-badge">
            <strong>Ayodhya</strong>
            <span>Uttar Pradesh</span>
          </div>

        </div>


        <div className="intro-content">

          <span className="section-label">
            WELCOME TO AYODHYA
          </span>

          <h2>
            Discover <span>Ayodhya</span>
          </h2>

          <p>
            Ayodhya is a famous holy city known for its temples,
            history and connection with Lord Rama.
          </p>

          <p>
            From Ram Mandir to the Saryu River, there are many
            beautiful places to explore.
          </p>


          <div className="intro-highlights">

            <div>
              <strong>06+</strong>
              <span>Famous Places</span>
            </div>

            <div>
              <strong>01</strong>
              <span>Sacred River</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Rich History</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PLACES ================= */}

      <section
        className="places-section"
        id="places"
      >

        <div className="section-container">

          <div className="section-heading">

            <div>

              <span className="section-label">
                EXPLORE AYODHYA
              </span>

              <h2>
                Famous Places in <span>Ayodhya</span>
              </h2>

            </div>

            <p>
              Visit the famous temples, ghats and historic places
              of Ayodhya.
            </p>

          </div>


          <div className="places-grid">

            {places.map((place) => (

              <article
                className="place-card"
                key={place.id}
              >

                <div className="place-image">

                  <img
                    src={place.image}
                    alt={place.name}
                  />

                  <span className="place-number">
                    0{place.id}
                  </span>

                </div>


                <div className="place-content">

                  <span className="place-location">
                    📍 {place.location}
                  </span>

                  <h3>
                    {place.name}
                  </h3>

                  <p
                    className={
                      expandedCard === place.id
                        ? "expanded"
                        : ""
                    }
                  >
                    {place.description}
                  </p>

                  <button
                    className="read-more-btn"
                    onClick={() =>
                      toggleReadMore(place.id)
                    }
                  >
                    {expandedCard === place.id
                      ? "Read Less ↑"
                      : "Read More →"}
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SARYU ================= */}

      <section className="saryu-section">

        <div className="saryu-image">

          <img
            src={sharyuGhatImage}
            alt="Saryu River Ayodhya"
          />

        </div>


        <div className="saryu-content">

          <span className="section-label">
            VISIT SARYU RIVER
          </span>

          <h2>
            Peace beside the{" "}
            <span>Saryu River</span>
          </h2>

          <p>
            Enjoy the peaceful view of the Saryu River and watch
            the beautiful evening aarti.
          </p>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="final-cta">

        <div className="final-cta-content">

          <span className="section-label">
            PLAN YOUR VISIT
          </span>

          <h2>
            Visit <span>Ayodhya</span>
          </h2>

          <p>
            Explore temples, visit the ghats and enjoy the beauty
            of Ayodhya.
          </p>

          <a
            href="#places"
            className="hero-button"
          >
            Explore Places →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Ayodhya;