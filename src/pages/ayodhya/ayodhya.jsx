import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ayodhya.css";

import ayodhyaHeroBg from "./ayodhya_hero.jpg";
import HanumangarhiImage from "./Hanumangarhi.jpg";
import sharyuGhatImage from "./sharyuGhat.jpg";
import kanakBhawanImage from "./KanakBhawan.jpg";
import DashrathMahalImage from "./DashrathMahal.jpg";
import RamkiPaidiImage from "./RamkiPaidi.jpg";
import ayodhyaPrasadImage from "./ayodhya-prasad.jpg";

import {
  FaMapMarkerAlt,
  FaClock,
  FaPrayingHands,
  FaTimes,
  FaPlaneArrival,
  FaCalendarAlt,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";

const places = [
  {
    id: 1,
    name: "Shri Ram Janmabhoomi Mandir",
    tag: "SACRED SANCTUM",
    location: "Ram Janmabhoomi, Ayodhya",
    image: ayodhyaHeroBg,
    timings: "6:30 AM – 12:00 PM | 2:00 PM – 9:30 PM",
    aarti: "Mangala 6:30 AM, Shringar 12:00 PM, Sandhya 7:30 PM",
    shortDesc:
      "The monumental Nagara-style temple at the sacred birthplace of Lord Rama, crafted from exquisite pink Bansi Paharpur sandstone.",
    longDesc:
      "Shri Ram Janmabhoomi Mandir stands as a historic pinnacle of Indian classical temple architecture and millennia of devotion. Spanning a grand 70-acre complex, the temple features five carved mandapas (Nritya, Rang, Sabha, Prarthana, and Kirtan), 392 intricately sculpted stone pillars, and the divine idol of Ram Lalla carved from Krishna Shila stone. Pilgrims from across the world gather here to witness the grand architectural magnificence and feel the divine aura of Ayodhya.",
    highlights: [
      "3-Tier Nagara Sandstone Architecture",
      "392 Carved Stone Pillars",
      "Surya Tilak Mechanism",
      "Ram Lalla Sanctum Sanctorum",
    ],
  },
  {
    id: 2,
    name: "Hanuman Garhi",
    tag: "DEFENDER DEITY",
    location: "Sai Nagar, Ayodhya",
    image: HanumangarhiImage,
    timings: "5:00 AM – 11:00 PM",
    aarti: "Morning Aarti 5:30 AM, Evening Aarti 8:00 PM",
    shortDesc:
      "A 10th-century fortress temple perched atop 76 grand stone steps, dedicated to Lord Hanuman, the guardian protector of Ayodhya.",
    longDesc:
      "According to sacred tradition, before visiting the Ram Janmabhoomi, devotees seek the blessings of Lord Hanuman at Hanuman Garhi. Perched atop a hillock accessible via 76 grand steps, the citadel-like temple houses a golden idol of Maa Anjani cradling young Hanuman in her lap. The vibrant temple courtyard is world-renowned for its warm pure desi ghee besan ladoos offered as sacred prasad.",
    highlights: [
      "76 Steep Stone Steps",
      "Fortress Citadel Architecture",
      "Pure Desi Ghee Besan Ladoo Prasad",
      "Panoramic Views of Ayodhya",
    ],
  },
  {
    id: 3,
    name: "Saryu River & Ghats",
    tag: "HOLY RIVERFRONT",
    location: "Saryu Riverfront, Ayodhya",
    image: sharyuGhatImage,
    timings: "Open 24 Hours (Aarti at 6:30 PM)",
    aarti: "Grand Evening Saryu Maha Aarti at Sunset",
    shortDesc:
      "The eternal river mentioned across ancient epics, where devotees take holy snan and gather for the mesmerizing evening Maha Aarti.",
    longDesc:
      "The Saryu River is the lifeblood of Ayodhya's spiritual geography. Flowing gently beside historic ghats like Guptar Ghat and Naya Ghat, its sacred waters are believed to wash away all earthly sins. Every dusk, priests adorned in saffron robes perform the grand Saryu Maha Aarti with tiered brass lamps, conch shells, and devotional chants as floating oil diyas illuminate the tranquil waters.",
    highlights: [
      "Sacred Sunset Maha Aarti",
      "Serene Boat Rides",
      "Historic Guptar Ghat",
      "Floating Diya Offerings",
    ],
  },
  {
    id: 4,
    name: "Kanak Bhawan",
    tag: "ROYAL PALACE",
    location: "Tulsi Nagar, Ayodhya",
    image: kanakBhawanImage,
    timings: "8:00 AM – 11:30 AM | 4:30 PM – 9:00 PM",
    aarti: "Shringar Aarti 9:00 AM, Sandhya 7:00 PM",
    shortDesc:
      "The opulent 'Golden Palace' gifted to Devi Sita by Queen Kaikeyi, renowned for its ornate Bundelkhandi architecture and golden idols.",
    longDesc:
      "Also revered as 'Sone-ka-Ghar' (House of Gold), Kanak Bhawan was reconstructed in 1891 by Maharani Vrishbhanu Kunwari of Orchha. The palace features grand multi-tiered arches, delicate wall frescoes, lattice balconies, and a central courtyard leading to the inner sanctum where Lord Rama and Sita Ji wear crowns of radiant gold. Devotional bhajans resonate through its marble courtyards throughout the day.",
    highlights: [
      "Bundeli & Rajasthani Architecture",
      "Intricate Wall Paintings",
      "Golden Crowned Idols",
      "Melodious Daily Bhajans",
    ],
  },
  {
    id: 5,
    name: "Dashrath Mahal",
    tag: "DYNASTIC HERITAGE",
    location: "Ramkot, Ayodhya",
    image: DashrathMahalImage,
    timings: "8:00 AM – 12:00 PM | 4:00 PM – 9:00 PM",
    aarti: "Morning 8:30 AM, Evening 7:30 PM",
    shortDesc:
      "The royal palace seat of King Dashrath where Lord Rama spent his childhood, featuring colorful painted murals and an ornate entryway.",
    longDesc:
      "Dashrath Mahal, affectionately known as Bada Asthan, was the royal palace of King Dashrath, father of Lord Rama. Marked by a monumental multi-colored entrance archway adorned with depictions of peacocks, fish, and royal insignia, the palace houses shrines dedicated to King Dashrath, Lord Rama, Lakshmana, Bharata, and Shatrughna. The inner sanctum reverberates with traditional Awadhi kirtans.",
    highlights: [
      "Ornate Multicolor Royal Gate",
      "Childhood Palace of Shri Ram",
      "Awadhi Kirtan Musicians",
      "Historical Ramkot Setting",
    ],
  },
  {
    id: 6,
    name: "Ram Ki Paidi",
    tag: "EVENT WATERFRONT",
    location: "Near Naya Ghat, Ayodhya",
    image: RamkiPaidiImage,
    timings: "Open 24 Hours (Best visited at evening)",
    aarti: "Musical Fountain & Laser Show 7:00 PM onwards",
    shortDesc:
      "A majestic series of landscaped riverside steps and bathing pools that hosts the Guinness World Record Deepotsav celebration.",
    longDesc:
      "Ram Ki Paidi is a magnificent stepped ghat complex engineered along the channel of the Saryu River. Flanked by ancient temples and modern landscaped promenades, this riverside esplanade transforms into an ethereal realm during Diwali and Dev Deepawali, when millions of earthen lamps (diyas) illuminate the ghats to create Guinness World Records. Daily evening musical water fountains and laser shows make it a favorite gathering spot.",
    highlights: [
      "Guinness World Record Deepotsav",
      "Stepped Ghat Promenade",
      "Evening Laser & Fountain Show",
      "Spacious Riverside Walkway",
    ],
  },
];

const experiences = [
  {
    id: 1,
    tag: "DEVOTIONAL SUNSET",
    title: "Saryu Maha Aarti",
    desc: "Witness the sacred spectacle at dusk as grand multi-tiered brass lamps illuminate the tranquil waters of Saryu, accompanied by Vedic chants, conch blowing, and thousands of floating diyas.",
    timing: "Every Evening at Sunset (6:30 PM)",
    location: "Naya Ghat / Ram Ki Paidi",
  },
  {
    id: 2,
    tag: "SPIRITUAL DARSHAN",
    title: "Ram Lalla Mangala Aarti",
    desc: "Experience the profound divine stillness of dawn during the Mangala Aarti at Shri Ram Janmabhoomi Mandir, absorbing the morning bells and pure spiritual sanctity.",
    timing: "Daily at 6:30 AM",
    location: "Ram Janmabhoomi Complex",
  },
  {
    id: 3,
    tag: "WORLD RECORD SPECTACLE",
    title: "Maha Deepotsav Festival",
    desc: "Behold the world's grandest festival of lights when millions of earthen lamps are lit along Ram Ki Paidi, accompanied by holographic laser projections and Ramayana drones.",
    timing: "Annual Diwali Eve (Oct/Nov)",
    location: "Ram Ki Paidi Waterfront",
  },
  {
    id: 4,
    tag: "PILGRIMAGE TRAIL",
    title: "Panchkosi & Ramkot Parikrama",
    desc: "Participate in the ancient walking circumambulation around sacred Ramkot, connecting over 108 historic shrines, akharas, and sacred ponds of Ayodhya.",
    timing: "Early Morning (5:00 AM – 9:00 AM)",
    location: "Ramkot Heritage Belt",
  },
];

function Ayodhya() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Background scroll lock when modal is open
  useEffect(() => {
    if (selectedPlace) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setSelectedPlace(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedPlace]);

  return (
    <div className="ayodhya-page">

            <section className="ayodhya-hero">
        <div className="hero-bg-wrapper">
          <img
            src={ayodhyaHeroBg}
            alt="Majestic Ram Mandir Ayodhya illuminated at twilight"
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Discover the Divine Glory of <br />
            <span>Ayodhya</span>
          </motion.h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            The revered birthplace of Bhagwan Shri Ram on the banks of the sacred Saryu —
            where millennia of devotion, majestic Nagara sandstone architecture, and the
            world-record Deepotsav illuminate the timeless soul of India.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#places" className="hero-button primary">
              Explore Sacred Shrines
            </a>
            <a href="#experiences" className="hero-button secondary">
              Spiritual Experiences
            </a>
          </motion.div>
        </div>

        <div className="hero-scroll-cue">
          <a href="#intro" aria-label="Scroll to content">
            <span className="scroll-arrow" />
          </a>
        </div>
      </section>


            <section className="ayodhya-intro section-container" id="intro">
        <motion.div
          className="intro-left-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow">WELCOME TO AYODHYA DHAM</span>
          <h2>
            The Eternal Capital of the <span>Suryavansha.</span>
          </h2>
        </motion.div>

        <motion.div
          className="intro-right-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="intro-lead">
            Revered as the first of the seven sacred Mokshadayini cities of India, Ayodhya
            is where the epic Ramayana comes alive in every alley, ghat, and temple bell.
          </p>
          <p className="intro-subtext">
            From the grand newly consecrated Shri Ram Janmabhoomi Mandir to the ancient
            ramparts of Hanuman Garhi and the gentle holy currents of the Saryu River,
            Ayodhya welcomes millions of pilgrims with boundless spiritual energy, sacred
            traditions, and pristine Awadhi hospitality.
          </p>
        </motion.div>
      </section>


            <section className="places-section" id="places">
        <div className="section-container">
          <motion.div
            className="section-header-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-eyebrow">SACRED SHRINES & LANDMARKS</span>
            <h2>
              Must-Visit Places in <span>Ayodhya</span>
            </h2>
            <p>
              Explore the iconic temples, sacred ghats, and royal palaces that define the
              spiritual tapestry of Bhagwan Ram&apos;s holy city.
            </p>
          </motion.div>

          <div className="places-grid">
            {places.map((place, idx) => (
              <motion.article
                className="place-card"
                key={place.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="place-image-wrap">
                  <img src={place.image} alt={place.name} loading="lazy" />
                </div>

                <div className="place-content">
                  <span className="place-location">
                    <FaMapMarkerAlt /> {place.location}
                  </span>
                  <h3>{place.name}</h3>
                  <p>{place.shortDesc}</p>

                  <button
                    type="button"
                    className="btn-place-details"
                    onClick={() => setSelectedPlace(place)}
                  >
                    <span>Read More</span>
                    <span className="arrow-sym">→</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


            <AnimatePresence>
        {selectedPlace && (
          <div
            className="ayodhya-modal-backdrop"
            onClick={() => setSelectedPlace(null)}
          >
            <motion.div
              className="ayodhya-modal-container"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedPlace(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="modal-scroll-area">
                <div className="modal-hero-img-wrap">
                  <img src={selectedPlace.image} alt={selectedPlace.name} />
                  <div className="modal-img-gradient" />
                  <div className="modal-img-content">
                    <span className="modal-tag">{selectedPlace.tag}</span>
                    <h2>{selectedPlace.name}</h2>
                    <span className="modal-loc">
                      <FaMapMarkerAlt /> {selectedPlace.location}
                    </span>
                  </div>
                </div>

                <div className="modal-body-content">
                  <div className="modal-info-bar">
                    <div className="info-bar-item">
                      <FaClock className="bar-icon" />
                      <div>
                        <strong>Darshan Timings</strong>
                        <span>{selectedPlace.timings}</span>
                      </div>
                    </div>
                    <div className="info-bar-item">
                      <FaPrayingHands className="bar-icon" />
                      <div>
                        <strong>Aarti Timings</strong>
                        <span>{selectedPlace.aarti}</span>
                      </div>
                    </div>
                  </div>

                  <div className="modal-text-block">
                    <h3>Spiritual & Architectural Significance</h3>
                    <p>{selectedPlace.longDesc}</p>
                  </div>

                  <div className="modal-highlights-block">
                    <h3>Key Highlights & Features</h3>
                    <div className="highlights-grid">
                      {selectedPlace.highlights.map((item, i) => (
                        <div key={i} className="highlight-item">
                          <FaCheckCircle className="check-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


            <section className="ayodhya-culture-section">
        <div className="section-container">
          <motion.div
            className="culture-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="culture-title">
              <div>
                <span className="gold-label">CULTURE & HERITAGE</span>
                <h2>
                  A city rich in
                  <br />
                  <em>living traditions.</em>
                </h2>
              </div>
            </div>

            <p className="culture-intro">
              Ayodhya&apos;s living heritage can be experienced in
              its Vedic chants, temple music, sacred crafts, holy parikramas
              and everyday spiritual life.
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
              <h3>Nagara Architecture</h3>
              <p>
                Classical pink sandstone shikharas, intricately carved pillars,
                and Ramayana friezes define the architectural grandeur of Ayodhya.
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
              <h3>Maha Deepotsav</h3>
              <p>
                World-record celebration where over 25 lakh glowing earthen lamps
                illuminate the holy Saryu ghats on Diwali eve with laser projections.
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
              <h3>Sacred Parikrama</h3>
              <p>
                Ancient barefoot circumambulation trails connecting 108 historic
                shrines, akharas, and sacred waterbodies across holy Ramkot.
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
              <h3>Awadhi Kirtan</h3>
              <p>
                Centuries-old devotional musical traditions with harmonium, sitar,
                and soul-stirring Ramcharitmanas recitations echoing through the temples.
              </p>
              <div className="culture-arrow">↗</div>
            </motion.div>
          </div>
        </div>
      </section>


            <section className="ayodhya-taste-section">
        <div className="section-container">
          <div className="taste-two-col-layout">
            <motion.div
              className="taste-img-col"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={ayodhyaPrasadImage}
                alt="Authentic Hanumangarhi Besan Ladoo and Peda Prasad in brass thali"
                className="taste-img"
              />
              <div className="taste-badge">
                <strong>Pure Desi Ghee</strong>
                <span>Temple Mahaprasad</span>
              </div>
            </motion.div>

            <motion.div
              className="taste-text-col"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-eyebrow">TASTE OF AYODHYA</span>
              <h2>
                Sacred Prasad & <span>Satvik Delights</span>
              </h2>
              <p className="taste-lead">
                No pilgrimage to Ayodhya is complete without tasting the heavenly, aromatic
                mahaprasad prepared with pure desi ghee and offered at the ancient shrines.
              </p>
              <p className="taste-subtext">
                The iconic **Hanuman Garhi Besan Ladoo** is renowned across the subcontinent
                for its melt-in-the-mouth texture and rich cardamom aroma. Along with
                traditional **Ayodhya Khurchan Peda**, crispy morning kachori-jalebi, and
                wholesome satvik temple thalis, the holy city delights every culinary soul.
              </p>

              <div className="taste-tags-wrap">
                <span className="taste-tag">Hanuman Garhi Besan Ladoo</span>
                <span className="taste-tag">Ayodhya Peda</span>
                <span className="taste-tag">Ram Lalla Bhog</span>
                <span className="taste-tag">Crispy Kachori & Jalebi</span>
                <span className="taste-tag">Satvik Awadhi Thali</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


            <section className="experiences-section" id="experiences">
        <div className="section-container">
          <motion.div
            className="section-header-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-eyebrow">SACRED ACTIVITIES</span>
            <h2>
              Signature Experiences in <span>Ayodhya</span>
            </h2>
            <p>
              Immerse yourself in authentic spiritual rituals and cultural moments that
              leave an indelible imprint on your journey.
            </p>
          </motion.div>

          <div className="experiences-grid">
            {experiences.map((exp, idx) => (
              <motion.article
                className="exp-card"
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="exp-tag">{exp.tag}</span>
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
                <div className="exp-card-footer">
                  <div className="exp-meta-row">
                    <FaClock className="exp-icon" />
                    <span>{exp.timing}</span>
                  </div>
                  <div className="exp-meta-row">
                    <FaMapMarkerAlt className="exp-icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


            <section className="ayodhya-essentials-section">
        <div className="section-container">
          <motion.div
            className="section-header-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-eyebrow">VISITOR INFORMATION</span>
            <h2>
              Travel Essentials for <span>Ayodhya Dham</span>
            </h2>
            <p>
              Plan your spiritual pilgrimage smoothly with verified details on transit,
              weather, and temple etiquette.
            </p>
          </motion.div>

          <div className="essentials-grid">
            <motion.div
              className="essential-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="essential-icon-box">
                <FaCalendarAlt />
              </div>
              <h3>Best Time to Visit</h3>
              <p>
                **October to March** offers pleasant weather with daytime temperatures around
                18°C–25°C. Diwali (Deepotsav) and Ram Navami (March/April) are the most vibrant
                festivals to experience.
              </p>
            </motion.div>

            <motion.div
              className="essential-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <div className="essential-icon-box">
                <FaPlaneArrival />
              </div>
              <h3>How to Reach</h3>
              <p>
                Fly directly into **Maharishi Valmiki International Airport (AYJ)**, 12 km from
                the city, or arrive via the world-class **Ayodhya Dham Junction** railway station
                connected to all major Indian capitals.
              </p>
            </motion.div>

            <motion.div
              className="essential-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <div className="essential-icon-box">
                <FaInfoCircle />
              </div>
              <h3>Temple Guidelines</h3>
              <p>
                Free digital lockers are available at the Ram Mandir pilgrimage facilitation
                centre for mobiles, leather items, and bags. Modest traditional attire is
                recommended for darshan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Ayodhya;