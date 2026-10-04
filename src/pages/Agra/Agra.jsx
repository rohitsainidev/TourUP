import React from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiClock,
  FiCalendar,
  FiCreditCard,
  FiCamera,
  FiShield,
  FiCompass,
} from "react-icons/fi";
import {
  FaPlane,
  FaTrain,
  FaBus,
  FaLandmark,
  FaCameraRetro,
  FaUtensils,
  FaGem,
  FaMonument,
  FaTree,
} from "react-icons/fa";
import "./Agra.css";

import tajMahalHero from "./taj--mahal.jpg";
import tajMahal from "./taj-mahal.jpg";
import agraFort from "./agra-fort.webp";
import mehtabBagh from "./mehtab-bagh.webp";
import babyTaj from "./itmad-ud-daulah.webp";
import fatehpurSikri from "./Fatehpur-Sikri.webp";
import petha from "./agra-petha.jpg";
import bedaiJalebi from "./bedai-jalebi.jpg";
import mughlaiCuisine from "./mughlai-cuisine.jpg";
import agraChaat from "./agra-chaat.jpg";

// Highlight cards data
const highlightsData = [
  {
    icon: <FaLandmark className="highlight-icon-svg" />,
    title: "UNESCO Heritage",
    desc: "Home to the Taj Mahal, Agra Fort, and nearby Fatehpur Sikri.",
  },
  {
    icon: <FaCameraRetro className="highlight-icon-svg" />,
    title: "Best Photography",
    desc: "Captivating sunrise and sunset reflections along the Yamuna River.",
  },
  {
    icon: <FaUtensils className="highlight-icon-svg" />,
    title: "Famous Food",
    desc: "Relish authentic Petha, Dalmoth, Bedai, and Mughlai delicacies.",
  },
  {
    icon: <FaGem className="highlight-icon-svg" />,
    title: "Pietra Dura Art",
    desc: "Centuries-old handcrafted marble inlay with semi-precious stones.",
  },
];

// Top Attractions data
const attractionsData = [
  {
    title: "Taj Mahal",
    img: tajMahal,
    desc: "Built by Emperor Shah Jahan in memory of Mumtaz Mahal, the Taj Mahal is one of the greatest architectural masterpieces ever built. Made entirely from white marble, its beauty changes throughout the day with sunlight, creating breathtaking views for visitors.",
  },
  {
    title: "Agra Fort",
    img: agraFort,
    desc: "Agra Fort is a massive red sandstone fort built by Emperor Akbar. It houses royal palaces, audience halls, beautiful courtyards and offers incredible views of the Taj Mahal.",
  },
  {
    title: "Mehtab Bagh",
    img: mehtabBagh,
    desc: "Mehtab Bagh is a beautiful Mughal garden located across the Yamuna River. It offers one of the most spectacular sunset views of the Taj Mahal and is a favorite destination for photographers.",
  },
  {
    title: "Itmad-ud-Daulah (Baby Taj)",
    img: babyTaj,
    desc: "Often called the Baby Taj, this elegant white marble monument is famous for its delicate carvings and beautiful pietra dura artwork. It is considered the inspiration for the Taj Mahal.",
  },
  {
    title: "Fatehpur Sikri",
    img: fatehpurSikri,
    desc: "Built by Emperor Akbar, Fatehpur Sikri served as the Mughal capital for a short period. It is famous for Buland Darwaza, Jama Masjid and magnificent Mughal architecture.",
  },
  {
    title: "Agra Petha",
    img: petha,
    desc: "Agra Petha is the city's most famous sweet made from ash gourd. Available in many delicious flavors, it is one of the most popular souvenirs tourists carry home after visiting Agra.",
  },
];

// Timings data
const timingsData = [
  {
    icon: <FaMonument className="info-badge-icon" />,
    place: "Taj Mahal",
    timing: "Sunrise – Sunset",
    closed: "Friday (Closed for Prayers)",
  },
  {
    icon: <FaLandmark className="info-badge-icon" />,
    place: "Agra Fort",
    timing: "6:00 AM – 6:00 PM",
    closed: "Open All 7 Days",
  },
  {
    icon: <FaTree className="info-badge-icon" />,
    place: "Mehtab Bagh",
    timing: "6:00 AM – 6:00 PM",
    closed: "Open All 7 Days",
  },
];

// Ticket Entry Fee data
const ticketData = [
  {
    category: "Indian Citizens",
    basic: "₹50",
    mausoleum: "₹200",
    total: "₹250",
  },
  {
    category: "SAARC & BIMSTEC Citizens",
    basic: "₹540",
    mausoleum: "₹200",
    total: "₹740",
  },
  {
    category: "Foreign Tourists",
    basic: "₹1,100",
    mausoleum: "₹200",
    total: "₹1,300",
  },
  {
    category: "Children (Below 15 Years)",
    basic: "Free",
    mausoleum: "Free",
    total: "Free",
  },
];

// Food items data
const foodData = [
  {
    id: "petha",
    category: "Signature Sweet",
    title: "Agra Petha",
    img: petha,
    alt: "Authentic Agra Petha",
    desc: "Agra's world-renowned confection crafted from tender ash gourd steeped in pure saffron, cardamom, and rose syrup.",
    mustTry: "Panchhi Petha (Sadar Bazaar)",
    varieties: "Kesar Angoori • Paan Petha • Dry Petha",
  },
  {
    id: "bedai",
    category: "Morning Tradition",
    title: "Bedai & Jalebi",
    img: bedaiJalebi,
    alt: "Bedai with spicy aloo and hot jalebi",
    desc: "Crisp lentil-stuffed puffed puris served with fiery dubki aloo curry and spiral hot desi ghee jalebis.",
    mustTry: "Deviram Sweets (Pratap Pura)",
    varieties: "Crispy Bedai • Dubki Aloo • Desi Jalebi",
  },
  {
    id: "mughlai",
    category: "Royal Heritage",
    title: "Mughlai Delicacies",
    img: mughlaiCuisine,
    alt: "Royal Mughlai Cuisine",
    desc: "Imperial Mughal dishes: slow-cooked saffron kormas, succulent mutton seekh kebabs, and warm tandoori roghani naan.",
    mustTry: "Pinch of Spice (Fatehabad Road)",
    varieties: "Shahi Korma • Seekh Kebabs • Biryani",
  },
  {
    id: "chaat",
    category: "Chaat & Street Food",
    title: "Agra Bhalla & Dalmoth",
    img: agraChaat,
    alt: "Agra Bhalla Chaat and Dalmoth",
    desc: "Golden aloo bhalla crisped in pure desi ghee, dressed with saunth and curd, paired with spicy crunchy Dalmoth.",
    mustTry: "Agra Chaat Gali (Sadar Bazaar)",
    varieties: "Desi Ghee Bhalla • Saunth • Dalmoth",
  },
];

// Transit data
const reachData = [
  {
    icon: <FaPlane className="reach-icon-svg" />,
    mode: "By Air",
    desc: "Agra Airport offers domestic flights. Indira Gandhi International Airport (DEL) in Delhi is the primary global gateway located ~210 km away.",
  },
  {
    icon: <FaTrain className="reach-icon-svg" />,
    mode: "By Train",
    desc: "Agra Cantt Railway Station is well connected by Gatimaan Express and Vande Bharat, linking New Delhi to Agra in just 100 minutes.",
  },
  {
    icon: <FaBus className="reach-icon-svg" />,
    mode: "By Road",
    desc: "The 6-lane Yamuna Expressway seamlessly connects Delhi/NCR to Agra in ~3 hours. Regular AC Volvo and luxury state buses are easily accessible.",
  },
];

// Travel Tips data
const tipsData = [
  {
    colTitle: "Planning & Timings",
    badge: "01",
    items: [
      {
        icon: <FiClock />,
        title: "Early Sunrise Visit",
        desc: "Arrive by 6:00 AM to beat peak crowds, bypass midday heat, and experience the changing pinkish-gold sunrise hues on the marble.",
      },
      {
        icon: <FiCalendar />,
        title: "Friday Closure Notice",
        desc: "The Taj Mahal remains closed every Friday for prayers. Plan to explore Agra Fort, Mehtab Bagh, or Fatehpur Sikri on Fridays.",
      },
      {
        icon: <FiCreditCard />,
        title: "Pre-Book ASI E-Tickets",
        desc: "Avoid long queues at the monument entrance by booking official ASI e-tickets online beforehand. Always carry a valid photo ID.",
      },
    ],
  },
  {
    colTitle: "On-Site Rules & Transit",
    badge: "02",
    items: [
      {
        icon: <FiCamera />,
        title: "Camera & Bag Regulations",
        desc: "Still photography is allowed in gardens. Tripods, drones, backpacks, and video filming inside the main mausoleum chamber are strictly prohibited.",
      },
      {
        icon: <FiShield />,
        title: "Shoe Covers & Dress Code",
        desc: "Wear comfortable slip-on shoes for security checks. Disposable shoe covers are provided at entry for walking on the main marble terrace.",
      },
      {
        icon: <FiCompass />,
        title: "500m Eco-Transit Zone",
        desc: "Motor vehicles are restricted within 500m of the monument. Hop on pollution-free electric golf carts or eco-rickshaws from parking lots.",
      },
    ],
  },
];

// Standard fade-in-up transition configuration
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

function Agra() {
  return (
    <div className="agra-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <div className="hero-bg-wrapper">
          <img
            src={tajMahalHero}
            alt="Taj Mahal Agra"
            className="hero-bg-img"
          />
          <div className="hero-gradient-overlay"></div>
        </div>

        <div className="hero-inner-container">
          <div className="hero-content">

            <motion.h1
              className="hero-main-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              Discover the Beauty of <br />
              <span className="hero-title-highlight">Taj Mahal</span>
            </motion.h1>

            <motion.p
              className="hero-lead-text"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Agra is one of India&apos;s most iconic tourist destinations,
              famous for the magnificent Taj Mahal, rich Mughal history,
              beautiful gardens, ancient forts, delicious food, and
              world-famous marble craftsmanship.
            </motion.p>

            <motion.div
              className="hero-action-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#attractions" className="btn-hero-primary">
                Explore Now
              </a>
              <a href="#about" className="btn-hero-secondary">
                Learn More
              </a>
            </motion.div>

          </div>
        </div>

        <div className="hero-scroll-cue">
          <a href="#about" aria-label="Scroll to content">
            <span className="scroll-arrow"></span>
          </a>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section" id="about">
        <div className="about-container">
          <motion.div
            className="about-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <span className="about-eyebrow">ABOUT THE HERITAGE CITY</span>
            <h2 className="about-heading">
              Where Mughal Grandeur Meets <span>Timeless Heritage</span>
            </h2>
          </motion.div>

          <motion.div
            className="about-text-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <p className="about-paragraph">
              Located on the historic banks of the Yamuna River in Uttar Pradesh,
              Agra stands as one of the world&apos;s most celebrated heritage destinations.
              It served as the illustrious capital of the Mughal Empire under emperors
              Akbar, Jahangir, and Shah Jahan, blossoming into a global epicenter of art,
              culture, and architectural mastery.
            </p>

            <p className="about-paragraph">
              Internationally recognized because of the peerless Taj Mahal—one of the
              Seven Wonders of the World and a UNESCO World Heritage Site—Agra also
              preserves the monumental red sandstone Agra Fort, tranquil Persian-style
              gardens, historic royal tombs, vibrant centuries-old bazaars, and mouth-watering
              street delicacies like the iconic Agra Petha.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="about-stats-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="about-stat">
              <strong>03</strong>
              <span>UNESCO Sites</span>
            </div>
            <div className="about-stat-divider"></div>
            <div className="about-stat">
              <strong>1526</strong>
              <span>Mughal Capital</span>
            </div>
            <div className="about-stat-divider"></div>
            <div className="about-stat">
              <strong>Yamuna</strong>
              <span>Scenic Riverfront</span>
            </div>
            <div className="about-stat-divider"></div>
            <div className="about-stat">
              <strong>7th</strong>
              <span>Wonder of the World</span>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <div className="highlights-grid">
            {highlightsData.map((item, idx) => (
              <motion.div
                key={idx}
                className="highlight-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOP ATTRACTIONS ================= */}
      <section className="places" id="attractions">
        <motion.div
          className="section-header-centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">EXPLORE MONUMENTS</span>
          <h2>Top Attractions of Agra</h2>
          <p className="section-subtitle">
            Iconic architectural wonders, historic bastions, and royal riverfront gardens.
          </p>
        </motion.div>

        <div className="place-grid">
          {attractionsData.map((item, idx) => (
            <motion.div
              key={idx}
              className="place-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (idx % 3) * 0.1 }}
            >
              <div className="place-media-wrapper">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>

              <div className="place-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HISTORY & VISIT SECTION ================= */}
      <section className="history-section">
        <motion.div
          className="history-content-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">CENTURIES OF LEGACY</span>
          <h2>History of Agra</h2>
          <p>
            Agra rose to world fame as the radiant seat of power of the Mughal Empire.
            Under the reigns of Akbar, Jahangir, and Shah Jahan, the city flourished as an
            international center of arts, poetry, statecraft, and architectural genius.
            During this golden age, magnificent imperial palaces, formidable bastions,
            and paradisiacal Persian charbagh gardens were built along the sacred Yamuna.
          </p>
          <p>
            The city&apos;s timeless architecture harmoniously fuses Persian, Islamic,
            and indigenous Indian techniques, creating intricate marble inlays and sandstone
            marvels that continue to draw millions of travelers from every corner of the world.
          </p>
        </motion.div>
      </section>

      {/* Best Time to Visit */}
      <section className="visit-section">
        <motion.div
          className="visit-container-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">SEASONAL GUIDE</span>
          <h2>Best Time to Visit Agra</h2>
          <p>
            <strong>October to March</strong> is the prime season to visit Agra. Mild, pleasant
            breezes and clear sunny skies make sightseeing comfortable and provide the most
            vibrant lighting for photography at sunrise and dusk.
          </p>
        </motion.div>
      </section>

      {/* ================= OPENING TIMINGS ================= */}
      <section className="info-section" id="timings">
        <motion.div
          className="section-header-centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">PLAN YOUR VISIT</span>
          <h2>Opening Timings</h2>
        </motion.div>

        <div className="info-grid">
          {timingsData.map((item, idx) => (
            <motion.div
              key={idx}
              className="info-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="info-icon-wrapper">{item.icon}</div>
              <h3>{item.place}</h3>
              <p className="info-time-val">{item.timing}</p>
              <p className="info-status">
                <strong>Schedule:</strong> {item.closed}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ENTRY FEE ================= */}
      <section className="info-section">
        <motion.div
          className="section-header-centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">TICKETS & ADMISSION</span>
          <h2>Taj Mahal Entry Fee</h2>
        </motion.div>

        {/* Desktop View: Full Comparison Table */}
        <motion.div
          className="ticket-table-wrapper ticket-desktop-view"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <table className="ticket-table">
            <thead>
              <tr>
                <th>Visitor Category</th>
                <th>Basic Entry</th>
                <th>Main Mausoleum</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {ticketData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.category}</td>
                  <td>{item.basic}</td>
                  <td>{item.mausoleum}</td>
                  <td><strong>{item.total}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile View: Clean Responsive Cards (Zero Horizontal Cutoff) */}
        <motion.div
          className="ticket-mobile-cards"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {ticketData.map((item, idx) => (
            <div key={idx} className="ticket-mobile-card">
              <div className="ticket-mobile-card-header">
                <span className="ticket-mobile-cat">{item.category}</span>
                <span className="ticket-mobile-total-badge">{item.total}</span>
              </div>
              <div className="ticket-mobile-breakdown">
                <div className="ticket-detail-item">
                  <span className="detail-label">Basic Entry</span>
                  <span className="detail-value">{item.basic}</span>
                </div>
                <div className="ticket-detail-item">
                  <span className="detail-label">Main Mausoleum</span>
                  <span className="detail-value">{item.mausoleum}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <p className="ticket-note">
          <strong>Official Note:</strong> The Main Mausoleum ticket is optional and required only if you wish to enter the central domed chamber housing the cenotaphs. Children below 15 years enter completely free of charge.
        </p>
      </section>

      {/* ================= FAMOUS FOOD ================= */}
      <section className="food-section" id="food">
        <div className="food-container">
          <motion.div
            className="food-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <span className="food-eyebrow">AUTHENTIC FLAVORS</span>
            <h2>Famous Food of Agra</h2>
            <p className="food-subtitle">
              From imperial Mughlai recipes to bustling morning lanes with crisp bedai and royal saffron petha.
            </p>
          </motion.div>

          <div className="food-list">
            {foodData.map((item, idx) => (
              <motion.div
                key={item.id}
                className="food-item"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="food-item-media">
                  <img src={item.img} alt={item.alt} loading="lazy" />
                </div>
                <div className="food-item-info">
                  <span className="food-item-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="food-item-bottom">
                    <span className="food-item-place">
                      <FiMapPin className="food-pin-icon" />
                      <span><strong>Must Try:</strong> {item.mustTry}</span>
                    </span>
                    <span className="food-item-varieties">{item.varieties}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW TO REACH ================= */}
      <section className="reach-section">
        <motion.div
          className="section-header-centered"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">CONNECTIVITY & TRANSIT</span>
          <h2>How to Reach Agra</h2>
        </motion.div>

        <div className="reach-grid">
          {reachData.map((item, idx) => (
            <motion.div
              key={idx}
              className="reach-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
            >
              <div className="reach-icon-wrap">{item.icon}</div>
              <h3>{item.mode}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TRAVEL TIPS ================= */}
      <section className="tips-section" id="travel-tips">
        <div className="tips-container">
          <motion.div
            className="tips-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <span className="tips-eyebrow">VISITOR ESSENTIALS</span>
            <h2>Travel Tips for Agra</h2>
            <p className="tips-subtitle">
              Crucial advice and monument guidelines to help you plan a smooth, hassle-free heritage visit.
            </p>
          </motion.div>

          <div className="tips-frame">
            {tipsData.map((col, colIdx) => (
              <motion.div
                key={colIdx}
                className="tips-col"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: colIdx * 0.15 }}
              >
                <div className="tips-col-header">
                  <span className="tips-col-badge">{col.badge}</span>
                  <h3>{col.colTitle}</h3>
                </div>

                {col.items.map((tip, tipIdx) => (
                  <div key={tipIdx} className="tip-item">
                    <div className="tip-item-icon">
                      {tip.icon}
                    </div>
                    <div className="tip-item-text">
                      <h4>{tip.title}</h4>
                      <p>{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Agra;