import React, { useState } from "react";
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

function Lucknow() {
  const [placeStart, setPlaceStart] = useState(0);
  const [foodStart, setFoodStart] = useState(0);

  const places = [
    {
      name: "Bara Imambara",
      image: BaraImambaraImage,
      description:
        "A magnificent historical monument famous for its grand architecture and Bhool Bhulaiya.",
    },
    {
      name: "Rumi Darwaza",
      image: RumiDarwazaImage,
      description:
        "One of Lucknow's most iconic gateways, known for its impressive Nawabi architecture.",
    },
    {
      name: "Chota Imambara",
      image: ChotaImambaraImage,
      description:
        "A beautiful monument decorated with chandeliers and elegant Islamic architecture.",
    },
    {
      name: "British Residency",
      image: BritishResidencyImage,
      description:
        "A historic site that played an important role during the Revolt of 1857.",
    },
    {
      name: "Ambedkar Memorial Park",
      image: AmbedkarParkImage,
      description:
        "A grand memorial complex known for its impressive architecture and spacious surroundings.",
    },
    {
      name: "Dilkusha Kothi",
      image: DilkushaKothiImage,
      description:
        "Historic palace ruins surrounded by greenery, reflecting Lucknow's royal past.",
    },
  ];

  const foods = [
    {
      name: "Galouti Kebab",
      image: galautiKababImage,
      tag: "LUCKNOW SPECIAL",
      description:
        "A famous Lucknowi delicacy known for its soft texture and rich blend of traditional spices.",
    },
    {
      name: "Lucknowi Biryani",
      image: LucknowiBiryaniImage,
      tag: "TRADITIONAL",
      description:
        "A fragrant rice dish prepared with aromatic spices and authentic Lucknowi flavours.",
    },
    {
      name: "Veg Biryani",
      image: VegBiryaniImage,
      tag: "VEGETARIAN",
      description:
        "A flavorful vegetarian biryani cooked with fresh vegetables and aromatic spices.",
    },
    {
      name: "Basket Chaat",
      image: BasketChaatImage,
      tag: "STREET FOOD",
      description:
        "A popular Lucknow street food served in a crispy potato basket with delicious toppings.",
    },
  ];

  const nextPlace = () => {
    setPlaceStart((prev) => (prev + 1) % places.length);
  };

  const previousPlace = () => {
    setPlaceStart(
      (prev) => (prev - 1 + places.length) % places.length
    );
  };

  const nextFood = () => {
    setFoodStart((prev) => (prev + 1) % foods.length);
  };

  const previousFood = () => {
    setFoodStart(
      (prev) => (prev - 1 + foods.length) % foods.length
    );
  };

  const visiblePlaces = [
    places[placeStart],
    places[(placeStart + 1) % places.length],
    places[(placeStart + 2) % places.length],
  ];

  const visibleFoods = [
    foods[foodStart],
    foods[(foodStart + 1) % foods.length],
    foods[(foodStart + 2) % foods.length],
  ];

  return (
    <div className="lucknow-page">

      {/* ================= HERO ================= */}

      <section className="lucknow-hero">

        <div className="hero-content">

          <div className="hero-text">

            <span className="hero-label">
              CITY OF NAWABS
            </span>

            <h1>Lucknow</h1>

            <p>
              Discover royal heritage, timeless architecture,
              vibrant culture and unforgettable flavours.
            </p>

            <button className="hero-button">
              Explore Lucknow
              <span>→</span>
            </button>

          </div>

          <div className="hero-image-box">
            <img
              src={lucknowImage}
              alt="Lucknow"
            />

            <div className="hero-image-caption">
              <span>UTTAR PRADESH</span>
              <strong>The City of Nawabs</strong>
            </div>
          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="about-section section">

        <div className="about-heading">

          <span>DISCOVER THE CITY</span>

          <h2>
            Where Royal Heritage
            <br />
            Meets Modern Culture
          </h2>

        </div>

        <div className="about-body">

          <div className="about-text">

            <p>
              Lucknow, the capital of Uttar Pradesh, is popularly known
              as the <strong>City of Nawabs</strong>. The city is known
              for its beautiful monuments, traditional hospitality and
              rich cultural heritage.
            </p>

            <p>
              From grand Imambaras and historic gateways to Chikankari
              embroidery and delicious Awadhi cuisine, every corner of
              Lucknow has a story to tell.
            </p>

          </div>

          <div className="about-highlights">

            <div className="highlight">
              <span>01</span>
              <div>
                <h3>Nawabi Heritage</h3>
                <p>Royal architecture & history</p>
              </div>
            </div>

            <div className="highlight">
              <span>02</span>
              <div>
                <h3>Chikankari</h3>
                <p>Traditional Lucknow craft</p>
              </div>
            </div>

            <div className="highlight">
              <span>03</span>
              <div>
                <h3>Awadhi Food</h3>
                <p>Rich traditional flavours</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ================= PLACES ================= */}

      <section className="places-section section">

        <div className="section-top">

          <div>
            <span>EXPLORE</span>
            <h2>Famous Places</h2>
          </div>

          <p>
            Discover the historic landmarks and architectural
            treasures of the City of Nawabs.
          </p>

        </div>

        <div className="places-carousel">

          <button
            className="slider-arrow"
            onClick={previousPlace}
          >
            ←
          </button>

          <div className="places-grid">

            {visiblePlaces.map((place, index) => (

              <article
                className="place-card"
                key={place.name}
              >

                <div className="place-image">

                  <img
                    src={place.image}
                    alt={place.name}
                  />

                  <span className="place-index">
                    0{index + 1}
                  </span>

                </div>

                <div className="place-details">

                  <span className="place-type">
                    HISTORICAL LANDMARK
                  </span>

                  <h3>{place.name}</h3>

                  <p>{place.description}</p>

                  <button className="discover-button">
                    Explore Place
                    <span>→</span>
                  </button>

                </div>

              </article>

            ))}

          </div>

          <button
            className="slider-arrow"
            onClick={nextPlace}
          >
            →
          </button>

        </div>

      </section>
{/* ================= FOOD ================= */}

<section className="lucknow-food">

  <div className="lucknow-food-container">

    {/* HEADING */}

    <div className="lucknow-food-header">

      <div className="lucknow-food-title">
        <span>TASTE THE CITY</span>
        <h2>Flavours of Lucknow</h2>
      </div>

      <p>
        From melt-in-the-mouth kebabs to aromatic biryani,
        experience the unforgettable flavours of Lucknow.
      </p>

    </div>


    {/* SLIDER */}

    <div className="lucknow-food-slider">

      <button
        className="lucknow-food-arrow"
        onClick={previousFood}
      >
        ←
      </button>


      <div className="lucknow-food-card">

        <img
          src={foods[foodStart].image}
          alt={foods[foodStart].name}
        />

        <div className="lucknow-food-overlay">

          <span>
            {foods[foodStart].tag}
          </span>

          <h3>
            {foods[foodStart].name}
          </h3>

          <p>
            {foods[foodStart].description}
          </p>

          <button>
            Discover Dish →
          </button>

        </div>

      </div>


      <button
        className="lucknow-food-arrow"
        onClick={nextFood}
      >
        →
      </button>

    </div>


    {/* DOTS */}

    <div className="lucknow-food-dots">

      {foods.map((food, index) => (

        <button
          key={food.name}
          className={
            foodStart === index ? "active" : ""
          }
          onClick={() => setFoodStart(index)}
        />

      ))}

    </div>

  </div>

</section>

      {/* ================= BEST TIME ================= */}

      <section className="best-time section">

        <div className="best-time-content">

          <div className="weather-icon">
            ☀
          </div>

          <div>
            <span>BEST TIME TO VISIT</span>

            <h2>October – March</h2>

            <p>
              Pleasant weather makes these months ideal for exploring
              Lucknow's monuments, markets, gardens and food streets.
            </p>
          </div>

        </div>

      </section>

      {/* ================= TRAVEL TIPS ================= */}

      <section className="tips-section section">

        <div className="tips-heading">

          <span>TRAVEL SMART</span>

          <h2>Tips for Your Journey</h2>

          <p>
            A few simple tips to make your Lucknow trip more enjoyable.
          </p>

        </div>

        <div className="tips-grid">

          <div className="tip">
            <span>01</span>
            <h3>Start Early</h3>
            <p>
              Visit popular monuments early to avoid crowds and
              enjoy a peaceful experience.
            </p>
          </div>

          <div className="tip">
            <span>02</span>
            <h3>Try Local Food</h3>
            <p>
              Don't miss authentic kebabs, biryani, chaat and
              traditional Awadhi flavours.
            </p>
          </div>

          <div className="tip">
            <span>03</span>
            <h3>Shop Chikankari</h3>
            <p>
              Explore local markets for beautiful traditional
              Chikankari embroidery.
            </p>
          </div>

          <div className="tip">
            <span>04</span>
            <h3>Respect Heritage</h3>
            <p>
              Keep historical monuments clean and follow local
              guidelines while exploring.
            </p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="lucknow-cta">

        <div className="cta-content">

          <span>YOUR NEXT ADVENTURE</span>

          <h2>
            Ready to Explore Lucknow?
          </h2>

          <p>
            Discover the royal charm, historic monuments,
            vibrant culture and delicious flavours of the
            City of Nawabs.
          </p>

          <button>
            Explore Lucknow
            <span>→</span>
          </button>

        </div>

      </section>

    </div>
  );
}

export default Lucknow;