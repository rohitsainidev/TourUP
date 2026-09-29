import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import FAQ from "./FAQ";

import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "General Inquiry",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        destination: "General Inquiry",
        subject: "",
        message: "",
      });
    }, 700);
  };

  return (
    <section className="contact-section-wrap" id="contact">
      <div className="contact-container">

        {/* ================= HEADER ================= */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="contact-badge">GET IN TOUCH</span>
          <h2>
            Plan Your Journey With <span>TourUP</span>
          </h2>
          <p className="contact-lead">
            Have questions about monuments, travel itineraries, city guides, or photo downloads?
            Our Uttar Pradesh travel team is here to assist you anytime.
          </p>
        </motion.div>

        {/* ================= MAIN 2-COL CONTACT GRID ================= */}
        <div className="contact-grid">

          {/* LEFT: INTERACTIVE MESSAGE FORM */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="form-card-header">
              <h3>Send Us a Message</h3>
              <p>Fill out the form below and we will respond within 24 hours.</p>
            </div>

            {isSubmitted && (
              <motion.div
                className="form-success-banner"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaCheckCircle className="success-icon" />
                <div>
                  <strong>Message Sent Successfully!</strong>
                  <p>Thank you for reaching out. Our travel desk will contact you soon.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-destination">Destination / Topic</label>
                  <select
                    id="contact-destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                  >
                    <option value="General Inquiry">General Travel Inquiry</option>
                    <option value="Agra">Agra (Taj Mahal & Fort)</option>
                    <option value="Varanasi">Varanasi (Ghats & Culture)</option>
                    <option value="Ayodhya">Ayodhya (Ram Mandir & Heritage)</option>
                    <option value="Lucknow">Lucknow (Awadh & Architecture)</option>
                    <option value="Photo Gallery">Gallery & Photo Downloads</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your travel questions, suggestions, or itinerary..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                <FaPaperPlane className="btn-send-icon" />
              </button>
            </form>
          </motion.div>

          {/* RIGHT: LUXURY INFO & SUPPORT CARD */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="info-card-header">
              <span className="info-badge">
                <FaHeadset /> DIRECT ASSISTANCE
              </span>
              <h3>TourUP Travel Desk</h3>
              <p>Connect with our UP Tourism specialists for guidance and recommendations.</p>
            </div>

            <div className="info-items-list">
              <a href="mailto:support@tourup.com" className="info-item-link">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <span className="info-label">Email Support</span>
                  <span className="info-val">support@tourup.com</span>
                </div>
              </a>

              <a href="tel:+918008687870" className="info-item-link">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>
                <div className="info-content">
                  <span className="info-label">Toll-Free Helpline</span>
                  <span className="info-val">+91 800-868-7870</span>
                </div>
              </a>

              <div className="info-item-static">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <span className="info-label">Visitor Information Center</span>
                  <span className="info-val">Hazratganj, Lucknow, Uttar Pradesh</span>
                </div>
              </div>

              <div className="info-item-static">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-content">
                  <span className="info-label">Support Hours</span>
                  <span className="info-val">Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* RESPONSE COMMITMENT */}
            <div className="info-commitment-box">
              <div className="commitment-indicator" />
              <span>Average response time: <strong>under 2 hours</strong></span>
            </div>

            {/* SOCIAL COMMUNITY */}
            <div className="info-social-wrap">
              <span className="social-label">Follow Uttar Pradesh Tourism:</span>
              <div className="info-social-links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* ================= ACCORDION FAQ ================= */}
      <FAQ />
    </section>
  );
}

export default Contact;