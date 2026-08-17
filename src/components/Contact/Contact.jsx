import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import FAQ from "./FAQ";

import {
  FaPaperPlane,
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  const [startCount, setStartCount] = useState(false);

  const [stats, setStats] = useState({
    destinations: 0,
    travelers: 0,
    rating: 0,
    support: 0,
  });

  const statsRef = useRef(null);

  /* ================= COUNT ANIMATION ================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let destinations = 0;
    let travelers = 0;
    let rating = 0;
    let support = 0;

    const interval = setInterval(() => {
      destinations += 10;
      travelers += 200;
      rating += 0.1;
      support += 1;

      if (destinations >= 500) destinations = 500;
      if (travelers >= 10000) travelers = 10000;
      if (rating >= 4.9) rating = 4.9;
      if (support >= 24) support = 24;

      setStats({
        destinations,
        travelers,
        rating: Number(rating.toFixed(1)),
        support,
      });

      if (
        destinations === 500 &&
        travelers === 10000 &&
        rating === 4.9 &&
        support === 24
      ) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [startCount]);

  return (
  <div className="contact-page">
      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">

          <span className="contact-tag">
            TOURUP • CONTACT US
          </span>

          <h1>
            Let's Talk About
            <span> Your Journey</span>
          </h1>

          <p>
            Have a question about a place or your trip?
            Send us a message and we will be happy to help.
          </p>

          <div className="contact-hero-buttons">

            <a href="#contact-form" className="contact-primary-btn">
              <FaPaperPlane />
              Send Message
            </a>

            <a href="#contact-info" className="contact-secondary-btn">
              <FaMapMarkedAlt />
              Contact Details
            </a>

          </div>

        </div>

      </section>


      {/* ================= WHY TOURUP ================= */}

      <section className="why-contact">

        <div className="contact-section-heading">

          <span>WHY TOURUP</span>

          <h2>
            We Are Here To Help
          </h2>

          <p>
            Planning a trip becomes easier when you have the right
            information and support.
          </p>

        </div>


        <div className="why-grid">

          <div className="why-card">

            <div className="why-icon">
              ✈️
            </div>

            <h3>
              Travel Help
            </h3>

            <p>
              Get useful information about places and travel.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              💬
            </div>

            <h3>
              Quick Support
            </h3>

            <p>
              Ask your questions and get simple answers.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              📍
            </div>

            <h3>
              Explore UP
            </h3>

            <p>
              Discover famous places, culture and history.
            </p>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section
        className="stats-section"
        ref={statsRef}
      >

        <div className="stats-container">

          <div className="stat-card">
            <h2>{stats.destinations}+</h2>
            <p>Places</p>
          </div>

          <div className="stat-card">
            <h2>
              {stats.travelers.toLocaleString()}+
            </h2>
            <p>Travelers</p>
          </div>

          <div className="stat-card">
            <h2>{stats.rating}★</h2>
            <p>Rating</p>
          </div>

          <div className="stat-card">
            <h2>{stats.support}/7</h2>
            <p>Support</p>
          </div>

        </div>

      </section>


      {/* ================= CONTACT AREA ================= */}

      <section className="contact-section">

        <div className="contact-container">


          {/* ================= FORM ================= */}

          <div
            className="contact-form-card"
            id="contact-form"
          >

            <span className="form-label">
              GET IN TOUCH
            </span>

            <h2>
              Send Us a Message
            </h2>

            <p>
              Have a question? Fill in the form below.
            </p>


            <form>

              <div className="form-row">

                <div className="input-group">

                  <label>
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="input-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>


              <div className="input-group">

                <label>
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What do you want to ask?"
                  required
                />

              </div>


              <div className="input-group">

                <label>
                  Message
                </label>

                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="send-btn"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </div>


          {/* ================= CONTACT INFO ================= */}

          <div
            className="contact-info-card"
            id="contact-info"
          >

            <span className="form-label">
              CONTACT US
            </span>

            <h2>
              Let's Connect
            </h2>

            <p className="info-intro">
              We would love to hear from you.
              Feel free to contact us anytime.
            </p>


            <div className="info-item">

              <div className="info-icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>
                <p>
                  support@tourup.com
                </p>
              </div>

            </div>


            <div className="info-item">

              <div className="info-icon">
                <FaPhone />
              </div>

              <div>
                <h4>Phone</h4>
                <p>
                  +91 XXXXX XXXXX
                </p>
              </div>

            </div>


            <div className="info-item">

              <div className="info-icon">
                <FaMapMarkedAlt />
              </div>

              <div>
                <h4>Location</h4>
                <p>
                  Uttar Pradesh, India
                </p>
              </div>

            </div>


            <div className="info-item">

              <div className="info-icon">
                <FaClock />
              </div>

              <div>
                <h4>Working Hours</h4>
                <p>
                  Monday - Saturday
                </p>
                <small>
                  9:00 AM - 7:00 PM
                </small>
              </div>

            </div>


            {/* SOCIAL */}

            <div className="social-area">

              <h4>
                Follow TourUP
              </h4>

              <div className="social-icons">

                <a href="#facebook">
                  <FaFacebookF />
                </a>

                <a href="#instagram">
                  <FaInstagram />
                </a>

                <a href="#twitter">
                  <FaTwitter />
                </a>

                <a href="#linkedin">
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

          <FAQ />
  </div>
  );
}

export default Contact;