import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaClock,
  FaTicketAlt,
  FaLandmark,
  FaCheckCircle,
  FaTimes,
  FaSun,
  FaUtensils,
  FaShoppingBag,
  FaCrown,
  FaFeatherAlt,
  FaCompass
} from "react-icons/fa";
import "./lucknow.css";

import lucknowImage from "./Lucknow.jpg";
import BaraImambaraImage from "./BaraImambara.jpg";
import RumiDarwazaImage from "./RumiDarwaza.jpg";
import ChotaImambaraImage from "./Imambara.jpg";
import BritishResidencyImage from "./BritishResidency.jpg";
import AmbedkarParkImage from "./AmbedkarPark.jpg";
import DilkushaKothiImage from "./DilkushaKothi.jpg";

import galautiKababImage from "./galautikabab.jpg";
import LucknowiBiryaniImage from "./LucknowiBiryani.jpg";
import VegBiryaniImage from "./vegbiryani.jpg";
import BasketChaatImage from "./BasketChaat.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

function Lucknow() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedPlace(null);
      }
    };
    if (selectedPlace) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlace]);

  const places = [
    {
      id: 1,
      name: "Bara Imambara",
      tag: "HISTORICAL MONUMENT",
      location: "Machchhi Bhavan, Lucknow",
      image: BaraImambaraImage,
      timings: "6:00 AM – 5:00 PM (Daily)",
      entryFee: "₹50 (Indians), ₹500 (Foreigners)",
      builtIn: "1784 by Nawab Asaf-ud-Daula",
      description:
        "A magnificent 18th-century architectural marvel renowned for its massive unsupported arched hall and the legendary Bhool Bhulaiya labyrinth.",
      longDesc:
        "Commissioned in 1784 by Nawab Asaf-ud-Daula as a noble famine-relief project, the Bara Imambara stands as one of India's most extraordinary architectural achievements. Its central vaulted hall is among the largest unsupported arched structures in the world, built without European metal beams or external pillars. Perched above the grand hall is the famed Bhool Bhulaiya, a mesmerizing labyrinth of 489 identical interconnected passages, whispering galleries, and rooftop terraces commanding panoramic views across old Lucknow.",
      highlights: [
        "World's largest unsupported arched hall",
        "Legendary Bhool Bhulaiya (labyrinth)",
        "Grand Asfi Mosque & Shahi Baoli (stepwell)",
        "Panoramic vistas of historic Lucknow",
      ],
    },
    {
      id: 2,
      name: "Rumi Darwaza",
      tag: "ROYAL GATEWAY",
      location: "Husainabad, Lucknow",
      image: RumiDarwazaImage,
      timings: "Open 24 Hours (Best viewed at Evening)",
      entryFee: "Free (Public Monument)",
      builtIn: "1784 by Nawab Asaf-ud-Daula",
      description:
        "The majestic 60-foot Turkish Gate that stands as the grand symbolic entryway and defining architectural signature of the City of Nawabs.",
      longDesc:
        "Rising 60 feet high between Bara Imambara and Chota Imambara, the Rumi Darwaza was constructed in 1784 under Nawab Asaf-ud-Daula's reign. Modeled after the historic Bab-i-Humayun (Sublime Porte) gateway of Constantinople (modern-day Istanbul), this monumental portal displays quintessential Awadhi architecture with floral motifs, an ornamental octagonal dome, and carved spires. In the evening, warm architectural lighting illuminates the gateway, creating a magical atmosphere.",
      highlights: [
        "Iconic 60-foot Awadhi-Mughal gateway",
        "Modeled after Istanbul's Sublime Porte",
        "Stunning evening illumination & lighting",
        "Official symbolic emblem of Lucknow city",
      ],
    },
    {
      id: 3,
      name: "Chota Imambara",
      tag: "PALATIAL SHRINE",
      location: "Tahirganj, Husainabad, Lucknow",
      image: ChotaImambaraImage,
      timings: "6:00 AM – 5:00 PM (Daily)",
      entryFee: "Included in Composite Ticket",
      builtIn: "1838 by Nawab Muhammad Ali Shah",
      description:
        "The exquisite 'Palace of Lights' adorned with golden gilded domes, dazzling Belgian glass chandeliers, and intricate Islamic calligraphy.",
      longDesc:
        "Built in 1838 by Nawab Muhammad Ali Shah as a sacred congregation hall and mausoleum, Chota Imambara (Husainabad Imambara) is world-renowned for its artistic opulence. During festivals like Muharram, hundreds of rare Belgian glass chandeliers and lanterns are lit, earning it the moniker 'Palace of Lights'. The complex features an intricate golden gilded dome, Quranic calligraphy carved onto fine marble surfaces, a reflection canal, and an exquisite miniature replica of the Taj Mahal.",
      highlights: [
        "Dazzling Belgian crystal chandeliers & lamps",
        "Gilded copper dome with Quranic calligraphy",
        "Exquisite miniature replica of Taj Mahal",
        "Nawabi royal artifacts and historic relics",
      ],
    },
    {
      id: 4,
      name: "British Residency",
      tag: "WAR MEMORIAL & RUINS",
      location: "Mahatma Gandhi Marg, Lucknow",
      image: BritishResidencyImage,
      timings: "7:00 AM – 6:00 PM (Closed on Mondays)",
      entryFee: "₹25 (Indians), ₹300 (Foreigners)",
      builtIn: "1780 – 1800 by Nawab Saadat Ali Khan",
      description:
        "A sprawling heritage park and historic battleground preserved with cannon-scarred brick ruins from the historic Siege of Lucknow in 1857.",
      longDesc:
        "Spanning 33 serene acres of manicured gardens, the British Residency was originally built for the British Resident General appointed to the Awadh court. In 1857, it became the dramatic center of the prolonged Siege of Lucknow during India's First War of Independence. Today, the atmospheric brick ruins remain preserved with visible cannonball indentations and shrapnel marks. The on-site museum exhibits authentic 19th-century weaponry, siege dioramas, original photographs, and historical documents.",
      highlights: [
        "Historic 1857 Rebellion battlefield ruins",
        "Museum featuring 19th-century weapons & photos",
        "Preserved cannonball-marked brick structures",
        "33 acres of peaceful landscaped parkland",
      ],
    },
    {
      id: 5,
      name: "Ambedkar Memorial Park",
      tag: "MODERN ARCHITECTURE",
      location: "Vipul Khand, Gomti Nagar, Lucknow",
      image: AmbedkarParkImage,
      timings: "11:00 AM – 9:00 PM (Daily)",
      entryFee: "₹20 per person",
      builtIn: "2008 by Govt. of Uttar Pradesh",
      description:
        "A colossal 107-acre civic monument crafted entirely from pink Rajasthani sandstone, featuring monumental domes, elephant colonnades, and waterways.",
      longDesc:
        "Constructed along the banks of the Gomti River across 107 sprawling acres, the Dr. Bhimrao Ambedkar Memorial Park is an extraordinary landmark of modern Indian architecture. Built using thousands of tons of finely carved pink sandstone quarried from Rajasthan, the complex features a soaring 112-foot memorial stupa, a grand avenue flanked by 62 monumental carved stone elephants, vast courtyards, and tranquil reflecting pools illuminated by night lighting.",
      highlights: [
        "107 acres of hand-carved pink sandstone",
        "Grand avenue with 62 stone elephant statues",
        "112-foot high central memorial stupa",
        "Spectacular nighttime illumination & fountains",
      ],
    },
    {
      id: 6,
      name: "Dilkusha Kothi",
      tag: "ROYAL PALACE RUINS",
      location: "Bibiapur, Dilkusha Cantt, Lucknow",
      image: DilkushaKothiImage,
      timings: "8:00 AM – 6:00 PM (Daily)",
      entryFee: "Free Entry",
      builtIn: "Circa 1800 by Nawab Saadat Ali Khan",
      description:
        "The picturesque 18th-century English Baroque palace ruins nestled within verdant orchards, once the hunting lodge and summer retreat of the Nawabs.",
      longDesc:
        "Commissioned around 1800 by Nawab Saadat Ali Khan and conceived by Major Gore Ouseley, Dilkusha Kothi was designed in the rare English Baroque style, inspired by Northumberland's Seaton Delaval Hall. Originally featuring grand porticos, corner towers, and luxurious drawing rooms, it served as a royal hunting retreat and countryside resort. Today, its picturesque sandstone and brick ruins stand gracefully amid lush mango trees and manicured lawns, favored by history enthusiasts and photographers.",
      highlights: [
        "Rare English Baroque palace architecture",
        "Picturesque 19th-century romantic ruins",
        "Peaceful countryside ambiance with mango groves",
        "Popular heritage photography destination",
      ],
    },
  ];

  const foods = [
    {
      name: "Galouti Kebab",
      image: galautiKababImage,
      tag: "LUCKNOW SPECIAL",
      description:
        "A famous Lucknowi delicacy known for its melt-in-the-mouth texture and rich blend of traditional aromatic spices.",
    },
    {
      name: "Lucknowi Biryani",
      image: LucknowiBiryaniImage,
      tag: "ROYAL DUM RECIPE",
      description:
        "A fragrant rice delicacy slow-cooked in sealed handis with saffron, subtle rose water, and authentic Nawabi flavours.",
    },
    {
      name: "Veg Biryani",
      image: VegBiryaniImage,
      tag: "VEGETARIAN",
      description:
        "A flavorful royal vegetarian biryani prepared with garden fresh vegetables, saffron grains, and hand-ground spices.",
    },
    {
      name: "Basket Chaat",
      image: BasketChaatImage,
      tag: "STREET SPECIAL",
      description:
        "Lucknow's iconic street food delight served in an edible crispy potato basket layered with tangy chutneys and curd.",
    },
  ];

  const aboutHighlights = [
    {
      icon: <FaCrown />,
      title: "Nawabi Heritage",
      text: "Mughal-Awadhi architecture, unsupported arched halls, and historic royal courtyards."
    },
    {
      icon: <FaFeatherAlt />,
      title: "Chikankari Art",
      text: "World-famous delicate hand-embroidered shadowcraft perfected by artisans over centuries."
    },
    {
      icon: <FaUtensils />,
      title: "Awadhi Gastronomy",
      text: "Legendary melt-in-mouth kebabs, fragrant dum biryanis, and time-honored royal kitchen recipes."
    }
  ];

  const tips = [
    {
      icon: <FaSun />,
      title: "Start Early",
      text: "Visit popular monuments like Bara Imambara and Rumi Darwaza in the early morning to beat the afternoon crowds and capture the best lighting."
    },
    {
      icon: <FaUtensils />,
      title: "Try Local Food",
      text: "Don't miss authentic Awadhi delicacies like melt-in-mouth Galouti kebabs at Chowk, fragrant dum biryani, and refreshing Hazratganj kulfi falooda."
    },
    {
      icon: <FaShoppingBag />,
      title: "Shop Chikankari",
      text: "Head to Hazratganj and historic Aminabad markets to discover authentic hand-embroidered Chikankari kurtas, sarees, and royal fabrics."
    },
    {
      icon: <FaLandmark />,
      title: "Respect Heritage",
      text: "Help preserve century-old Nawabi monuments by following local photography guidelines and avoiding littering on sacred heritage grounds."
    }
  ];

  return (
    <div className="lucknow-page">

      {/* ================= HERO (Cinematic Luxury) ================= */}
      <section className="lucknow-hero">
        <div className="hero-bg-wrapper">
          <img
            src={lucknowImage}
            alt="Majestic Rumi Darwaza and Royal Nawabi Heritage of Lucknow"
            className="hero-bg-img"
          />
          <div className="lucknow-hero-overlay"></div>
        </div>

        <div className="lucknow-hero-inner">
          <motion.div
            className="lucknow-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="hero-badge" variants={fadeInUp}>
              <span className="badge-sparkle">✦</span>
              <span>THE CITY OF NAWABS & ETERNAL TEHZEEB</span>
            </motion.div>

            <motion.h1 className="hero-main-title" variants={fadeInUp}>
              Discover the Royal Charm of <br />
              <span className="hero-title-highlight">Lucknow</span>
            </motion.h1>

            <motion.p className="hero-lead-text" variants={fadeInUp}>
              The legendary City of Nawabs — where grand Mughal-Awadhi architecture,
              timeless tehzeeb, world-famous Galouti kebabs, and exquisite Chikankari
              embroidery celebrate a magnificent living heritage.
            </motion.p>

            <motion.div className="hero-action-buttons" variants={fadeInUp}>
              <a href="#about-lucknow" className="btn-hero-primary">
                <FaCompass /> Explore Royal Heritage
              </a>
              <a href="#places-lucknow" className="btn-hero-secondary">
                Famous Monuments
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-scroll-cue">
          <a href="#about-lucknow" aria-label="Scroll to content">
            <span className="scroll-arrow"></span>
          </a>
        </div>
      </section>

      {/* ================= ABOUT (Varanasi-Style Balanced Layout) ================= */}
      <section className="about-section section" id="about-lucknow">
        <motion.div
          className="about-label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          DISCOVER THE CITY
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2>
              Where Royal Heritage
              <br />
              <span>Meets Modern Culture</span>
            </h2>
          </motion.div>

          <motion.div
            className="about-description"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="lead-p">
              Lucknow, the capital of Uttar Pradesh, is celebrated across the world
              as the magnificent <strong>City of Nawabs</strong> — a sanctuary of refined
              etiquette, architectural splendour, and warm Awadhi hospitality.
            </p>

            <p>
              From the soaring vaulted halls of ancient Imambaras and historic
              Turkish gateways to the delicate craftsmanship of hand-stitched Chikankari
              and the irresistible aromas of slow-cooked Nawabi cuisine, every lane of
              Lucknow whispers tales of a grand era.
            </p>
          </motion.div>
        </div>

        {/* 3 Modern Feature Cards in balanced horizontal row */}
        <motion.div
          className="about-features-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {aboutHighlights.map((hl, i) => (
            <motion.div
              key={i}
              className="about-feature-card"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="hl-icon">{hl.icon}</div>
              <div className="hl-text">
                <h3>{hl.title}</h3>
                <p>{hl.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= PLACES ================= */}
      <section className="places-section section" id="places-lucknow">
        <motion.div
          className="section-top"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
        >
          <div>
            <span>EXPLORE</span>
            <h2>Famous Places</h2>
          </div>
          <p>
            Discover the historic landmarks and architectural
            treasures of the City of Nawabs.
          </p>
        </motion.div>

        <motion.div
          className="places-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {places.map((place) => (
            <motion.article
              className="place-card"
              key={place.id}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
              onClick={() => setSelectedPlace(place)}
            >
              <div className="place-image">
                <img
                  src={place.image}
                  alt={place.name}
                  loading="lazy"
                />
              </div>

              <div className="place-details">
                <span className="place-location">
                  <FaMapMarkerAlt /> {place.location}
                </span>

                <h3>{place.name}</h3>

                <p>{place.description}</p>

                <div className="place-card-footer">
                  <button
                    type="button"
                    className="discover-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlace(place);
                    }}
                  >
                    <span>Explore Place</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ================= FOOD ================= */}
      <section className="lucknow-food" id="food-lucknow">
        <div className="lucknow-food-container">
          <motion.div
            className="lucknow-food-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
          >
            <div className="lucknow-food-title">
              <span>TASTE THE CITY</span>
              <h2>Flavours of Lucknow</h2>
            </div>
            <p>
              From melt-in-the-mouth kebabs to aromatic dum biryani,
              savour the legendary Nawabi culinary traditions of Awadh.
            </p>
          </motion.div>

          <motion.div
            className="lucknow-food-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {foods.map((food) => (
              <motion.div
                key={food.name}
                className="food-card"
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
              >
                <div className="food-image-wrap">
                  <img
                    src={food.image}
                    alt={food.name}
                    loading="lazy"
                  />
                </div>

                <div className="food-content">
                  <h3>{food.name}</h3>
                  <p>{food.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TRAVEL TIPS ================= */}
      <section className="tips-section section">
        <motion.div
          className="tips-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
        >
          <span>TRAVEL SMART</span>
          <h2>Tips for Your Journey</h2>
          <p>
            Essential guidance and local advice to make your Lucknow experience seamless and memorable.
          </p>
        </motion.div>

        <motion.div
          className="tips-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {tips.map((tip, idx) => (
            <motion.div
              key={idx}
              className="tip"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
            >
              <div className="tip-icon-box">{tip.icon}</div>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= PLACE DETAILS MODAL ================= */}
      <AnimatePresence>
        {selectedPlace && (
          <motion.div
            className="lucknow-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedPlace(null)}
          >
            <motion.div
              className="lucknow-modal-container"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.93, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
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
                  <div className="modal-img-gradient"></div>
                  <div className="modal-img-content">
                    <h2>{selectedPlace.name}</h2>
                    <div className="modal-loc">
                      <FaMapMarkerAlt /> {selectedPlace.location}
                    </div>
                  </div>
                </div>

                <div className="modal-body-content">
                  <div className="modal-info-bar">
                    <div className="info-bar-item">
                      <FaClock className="bar-icon" />
                      <div>
                        <strong>Visiting Hours</strong>
                        <span>{selectedPlace.timings}</span>
                      </div>
                    </div>
                    <div className="info-bar-item">
                      <FaTicketAlt className="bar-icon" />
                      <div>
                        <strong>Entry Fee</strong>
                        <span>{selectedPlace.entryFee}</span>
                      </div>
                    </div>
                    <div className="info-bar-item">
                      <FaLandmark className="bar-icon" />
                      <div>
                        <strong>Built Era</strong>
                        <span>{selectedPlace.builtIn}</span>
                      </div>
                    </div>
                  </div>

                  <div className="modal-text-block">
                    <h3>Historical Overview & Architecture</h3>
                    <p>{selectedPlace.longDesc}</p>
                  </div>

                  <div className="modal-highlights-block">
                    <h3>Key Highlights</h3>
                    <div className="highlights-grid">
                      {selectedPlace.highlights.map((h, i) => (
                        <div key={i} className="highlight-item">
                          <FaCheckCircle className="check-icon" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Lucknow;
