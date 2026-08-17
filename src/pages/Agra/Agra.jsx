import React from "react";
import "./Agra.css";

import tajMahal from "./taj-mahal.jpg";
import agraFort from "./agra-fort.webp";
import mehtabBagh from "./mehtab-bagh.webp";
import babyTaj from "./itmad-ud-daulah.webp";
import fatehpurSikri from "./fatehpur-sikri.webp";
import petha from "./agra-petha.jpg";

function Agra() {
  return (
    <div className="agra-page">

      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">

        <div className="hero-content">

          <span className="tag">Welcome to Agra</span>

          <h1>
            Discover the Beauty of
            <span> Taj Mahal</span>
          </h1>

          <p>
            Agra is one of India's most iconic tourist destinations,
            famous for the magnificent Taj Mahal, rich Mughal history,
            beautiful gardens, ancient forts, delicious food, and
            world-famous marble craftsmanship.

            Every year millions of visitors from around the world
            come to witness the timeless beauty of this historic city.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Explore Now
            </button>

            <button className="btn-secondary">
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={tajMahal}
            alt="Taj Mahal"
          />

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="about-section">

        <h2>About Agra</h2>

        <p>

          Located on the banks of the Yamuna River in Uttar Pradesh,
          Agra is among India's most famous heritage cities.
          It served as the capital of the Mughal Empire and is
          home to some of the finest examples of Mughal architecture.

        </p>

        <p>

          The city is internationally recognized because of the
          Taj Mahal, one of the Seven Wonders of the World and
          a UNESCO World Heritage Site.

          Apart from the Taj Mahal, Agra also offers magnificent
          forts, beautiful gardens, historic tombs, vibrant markets,
          and mouth-watering street food.

        </p>

      </section>

      {/* ================= HIGHLIGHTS ================= */}

      <section className="highlights">

        <div className="highlight-box">

          <h3>🏛 UNESCO Heritage</h3>

          <p>
            Home to the world-famous Taj Mahal and Agra Fort.
          </p>

        </div>

        <div className="highlight-box">

          <h3>📸 Best Photography</h3>

          <p>
            Sunrise & sunset views make Agra a paradise for photographers.
          </p>

        </div>

        <div className="highlight-box">

          <h3>🍛 Famous Food</h3>

          <p>
            Enjoy Petha, Bedai, Mughlai dishes and delicious street food.
          </p>

        </div>

        <div className="highlight-box">

          <h3>🎨 Marble Art</h3>

          <p>
            Agra is famous for handcrafted marble inlay work.
          </p>

        </div>

      </section>

      {/* ================= ATTRACTIONS ================= */}

      <section className="places">

        <h2>Top Attractions of Agra</h2>

        <div className="place-grid">

          {/* Taj Mahal */}

          <div className="place-card">

            <img src={tajMahal} alt="" />

            <div className="place-content">

              <h3>Taj Mahal</h3>

              <p>

                Built by Emperor Shah Jahan in memory of
                Mumtaz Mahal, the Taj Mahal is one of the
                greatest architectural masterpieces ever built.

                Made entirely from white marble, its beauty
                changes throughout the day with sunlight,
                creating breathtaking views for visitors.

              </p>

            </div>

          </div>

          {/* Agra Fort */}

          <div className="place-card">

            <img src={agraFort} alt="" />

            <div className="place-content">

              <h3>Agra Fort</h3>

              <p>

                Agra Fort is a massive red sandstone fort
                built by Emperor Akbar.

                It houses royal palaces, audience halls,
                beautiful courtyards and offers incredible
                views of the Taj Mahal.

              </p>

            </div>

          </div>
                   {/* Mehtab Bagh */}

          <div className="place-card">

            <img src={mehtabBagh} alt="Mehtab Bagh" />

            <div className="place-content">

              <h3>Mehtab Bagh</h3>

              <p>

                Mehtab Bagh is a beautiful Mughal garden located
                across the Yamuna River. It offers one of the most
                spectacular sunset views of the Taj Mahal and is a
                favorite destination for photographers.

              </p>

            </div>

          </div>

          {/* Baby Taj */}

          <div className="place-card">

            <img src={babyTaj} alt="Baby Taj" />

            <div className="place-content">

              <h3>Itmad-ud-Daulah (Baby Taj)</h3>

              <p>

                Often called the Baby Taj, this elegant white marble
                monument is famous for its delicate carvings and
                beautiful pietra dura artwork. It is considered the
                inspiration for the Taj Mahal.

              </p>

            </div>

          </div>

          {/* Fatehpur Sikri */}

          <div className="place-card">

            <img src={fatehpurSikri} alt="Fatehpur Sikri" />

            <div className="place-content">

              <h3>Fatehpur Sikri</h3>

              <p>

                Built by Emperor Akbar, Fatehpur Sikri served as the
                Mughal capital for a short period. It is famous for
                Buland Darwaza, Jama Masjid and magnificent Mughal
                architecture.

              </p>

            </div>

          </div>

          {/* Agra Petha */}

          <div className="place-card">

            <img src={petha} alt="Agra Petha" />

            <div className="place-content">

              <h3>Agra Petha</h3>

              <p>

                Agra Petha is the city's most famous sweet made from
                ash gourd. Available in many delicious flavors,
                it is one of the most popular souvenirs tourists
                carry home after visiting Agra.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* History */}

      <section className="history-section">

        <h2>History of Agra</h2>

        <p>

          Agra became an important city during the Mughal Empire.
          It served as the capital under Akbar, Jahangir and
          Shah Jahan. During this period magnificent buildings,
          forts and gardens were constructed which today attract
          millions of tourists every year.

        </p>

        <p>

          The city's architecture beautifully combines Persian,
          Islamic and Indian styles, making Agra one of India's
          richest historical destinations.

        </p>

      </section>

      {/* Best Time */}

      <section className="visit-section">

        <h2>Best Time to Visit</h2>

        <p>

          October to March is the ideal time to visit Agra.
          Pleasant weather makes sightseeing comfortable and
          offers the best photography opportunities.

        </p>

      </section>
            {/* ================= TIMINGS ================= */}

      <section className="info-section">

        <h2>Opening Timings</h2>

        <div className="info-grid">

          <div className="info-card">
            <h3>🕌 Taj Mahal</h3>
            <p>Sunrise – Sunset</p>
            <p><strong>Closed:</strong> Friday</p>
          </div>

          <div className="info-card">
            <h3>🏰 Agra Fort</h3>
            <p>6:00 AM – 6:00 PM</p>
          </div>

          <div className="info-card">
            <h3>🌳 Mehtab Bagh</h3>
            <p>6:00 AM – 6:00 PM</p>
          </div>

        </div>

      </section>

      {/* ================= ENTRY FEE ================= */}
<section className="info-section">

  <h2>Taj Mahal Entry Fee</h2>

  <table className="ticket-table">

    <thead>
      <tr>
        <th>Visitor Category</th>
        <th>Basic Entry</th>
        <th>Main Mausoleum</th>
        <th>Total</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>Indian Citizens</td>
        <td>₹50</td>
        <td>₹200</td>
        <td><strong>₹250</strong></td>
      </tr>

      <tr>
        <td>SAARC & BIMSTEC</td>
        <td>₹540</td>
        <td>₹200</td>
        <td><strong>₹740</strong></td>
      </tr>

      <tr>
        <td>Foreign Tourists</td>
        <td>₹1,100</td>
        <td>₹200</td>
        <td><strong>₹1,300</strong></td>
      </tr>

      <tr>
        <td>Children below 15 years</td>
        <td>Free</td>
        <td>Free</td>
        <td><strong>Free</strong></td>
      </tr>

    </tbody>

  </table>

  <p className="ticket-note">
    <strong>Note:</strong> The Main Mausoleum ticket is optional and is required only if you wish to enter the central marble tomb area. Children below 15 years can enter free of charge.
  </p>

</section>

      {/* ================= FOOD ================= */}

      <section className="food-section">

        <h2>Famous Food of Agra</h2>

        <div className="food-card">

          <img src={petha} alt="Agra Petha" />

          <div>

            <h3>Agra Petha</h3>

            <p>

              Agra Petha is the city's signature sweet prepared from
              ash gourd. Available in many flavours like Kesar,
              Angoori, Chocolate and Paan, it is one of the
              most loved souvenirs for tourists.

            </p>

            <ul>

              <li>✔ Petha</li>
              <li>✔ Dalmoth</li>
              <li>✔ Bedai</li>
              <li>✔ Kachori</li>
              <li>✔ Mughlai Cuisine</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= HOW TO REACH ================= */}

      <section className="reach-section">

        <h2>How to Reach Agra</h2>

        <div className="reach-grid">

          <div className="reach-card">

            <h3>✈ By Air</h3>

            <p>
              Agra Airport provides limited flights. Delhi Airport is
              the nearest major international airport.
            </p>

          </div>

          <div className="reach-card">

            <h3>🚆 By Train</h3>

            <p>
              Agra Cantt Railway Station is well connected with Delhi,
              Jaipur, Lucknow, Varanasi and other major cities.
            </p>

          </div>

          <div className="reach-card">

            <h3>🚌 By Road</h3>

            <p>
              Yamuna Expressway connects Delhi to Agra in about
              3–4 hours by car.
            </p>

          </div>

        </div>

      </section>

      {/* ================= TRAVEL TIPS ================= */}

      <section className="tips-section">

        <h2>Travel Tips</h2>

        <ul>

          <li>✔ Visit Taj Mahal early morning.</li>

          <li>✔ Carry a water bottle during summer.</li>

          <li>✔ Wear comfortable shoes.</li>

          <li>✔ Keep your camera fully charged.</li>

          <li>✔ Respect monument rules.</li>

          <li>✔ Don't litter inside heritage sites.</li>

        </ul>

      </section>

      {/* ================= MAP ================= */}

      <section className="map-section">

        <h2>Location</h2>

        <a
          href="https://maps.google.com/?q=Taj+Mahal"
          target="_blank"
          rel="noreferrer"
          className="map-btn"
        >
          View on Google Maps
        </a>

      </section>

    </div>
  );
}

export default Agra;