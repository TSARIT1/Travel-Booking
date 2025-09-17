import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import "../style/TrainInterface.css";

const TrainInterface = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const cities = [
    "New Delhi",
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Bengaluru",
    "Hyderabad",
    "Kanpur",
    "Lucknow",
    "Goa",
    "Jaipur",
  ];

  const swapCities = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  const handleSearch = () => {
    if (!fromCity || !toCity || !travelDate) {
      alert("Please fill all fields before searching.");
      return;
    }
    alert(`Searching Trains from ${fromCity} to ${toCity} on ${travelDate}`);
  };

  return (
    <div className="train-card">
      <h2 className="title">🚆 Train Ticket Booking</h2>

      <div className="train-form">
        <div className="input-box">
          <select
            id="fromCity"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="swap-container">
          <button type="button" className="swap-btn" onClick={swapCities}>
            <FaExchangeAlt />
          </button>
        </div>
        <div className="input-box">
          <select
            id="toCity"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="input-box">
          <input
            id="travelDate"
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            style={{color:" #0000003c"}}
          />
        </div>
        <div className="search-box">
          <button className="search-btn" onClick={handleSearch}>
            SEARCH TRAINS
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainInterface;
