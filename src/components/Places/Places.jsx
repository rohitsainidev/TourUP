import React from "react";
import "./Places.css";

import agra from "../../assets/tajmahal.jpg";
import varanasi from "../../assets/Varanasi.jpg";
import ayodhya from "../../assets/Ayodhya.jpg";
import lucknow from "../../assets/Lucknow.jpg";
function Places() {
  const places = [
    {
      name: "Agra",
      image: agra,
      desc: "Home of Taj Mahal - Symbol of Love",
    },
    {
      name: "Varanasi",
      image: varanasi,
      desc: "Spiritual Capital of India",
    },
    {
      name: "Ayodhya",
      image: ayodhya,
      desc: "Birthplace of Lord Ram",
    },
    {
      name: "Lucknow",
      image: lucknow,
      desc: "City of Nawabs & Culture",
    },
  ];

  return (
    <div className="places" id="places">
      <h2>Popular Places</h2>

      <div className="places-grid">
        {places.map((place, index) => (
          <div className="place-card" key={index}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;