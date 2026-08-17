import React, { useState } from "react";
import "./FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "Which places can I explore with TourUP?",
      answer:
        "You can explore famous places across Uttar Pradesh such as Agra, Varanasi, Lucknow, Ayodhya, Prayagraj, Mathura, Vrindavan and many more.",
    },
    {
      question: "Can I plan my trip with TourUP?",
      answer:
        "Yes. TourUP helps you discover places, learn about attractions and get useful travel information for your Uttar Pradesh trip.",
    },
    {
      question: "Is TourUP free to use?",
      answer:
        "Yes, TourUP is free to use. You can explore tourist places and travel information without any charges.",
    },
    {
      question: "How can I contact the TourUP team?",
      answer:
        "You can contact us through the Contact page. You can send a message using the contact form or use the available contact details.",
    },
    {
      question: "Will more places be added?",
      answer:
        "Yes. We plan to add more cities, tourist places and useful travel information from different parts of Uttar Pradesh.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">

      {/* HEADER */}
      <div className="faq-title">

        <span className="faq-label">
          TOURUP • FAQ
        </span>

        <h2>
          Frequently Asked <span>Questions</span>
        </h2>

        <p>
          Have a question about TourUP? Find simple answers
          to some common questions below.
        </p>

      </div>


      {/* FAQ LIST */}
      <div className="faq-container">

        {faqs.map((item, index) => (

          <div
            className={`faq-item ${
              active === index ? "active" : ""
            }`}
            key={index}
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={active === index}
            >

              <div className="faq-number">
                0{index + 1}
              </div>

              <h3>
                {item.question}
              </h3>

              <div className="faq-icon">
                {active === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </div>

            </button>


            <div
              className={`faq-answer ${
                active === index ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>

          </div>

        ))}

      </div>


      {/* BOTTOM TEXT */}
      <div className="faq-bottom">

        <p>
          Still have a question?
        </p>

        <a href="#contact">
          Contact TourUP →
        </a>

      </div>

    </section>
  );
}

export default FAQ;