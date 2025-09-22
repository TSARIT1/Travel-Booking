import React, { useState } from "react";
import "../style/FlightsInterface.css";

const FlightsInterface = () => {
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="flight-card">
      <h2>Book Flights</h2>

      <div className="trip-options">
        <button
          className={tripType === "oneway" ? "active" : ""}
          onClick={() => setTripType("oneway")}
        >
          One Way
        </button>
        <button
          className={tripType === "roundtrip" ? "active" : ""}
          onClick={() => setTripType("roundtrip")}
        >
          Round Trip
        </button>
        <button
          className={tripType === "multicity" ? "active" : ""}
          onClick={() => setTripType("multicity")}
        >
          Multi City
        </button>
      </div>

      {tripType === "roundtrip" && (
        <div className="flight-form">
          <input type="text" placeholder="From (Delhi)" />
          <input type="text" placeholder="To (Bengaluru)" />
          <input type="date" placeholder="Departure" />
          <input type="date" placeholder="Return" />
          <select>
            <option>1 Traveller, Economy</option>
            <option>2 Travellers, Economy</option>
            <option>1 Traveller, Business</option>
          </select>
          <button className="search-btn">SEARCH</button>
        </div>
      )}

      {tripType === "oneway" && (
        <div className="flight-form">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
          <input type="date" placeholder="Departure" />
          <select>
            <option>1 Traveller, Economy</option>
            <option>2 Travellers, Economy</option>
            <option>1 Traveller, Business</option>
          </select>
          <button className="search-btn">SEARCH</button>
        </div>
      )}

      {tripType === "multicity" && (
        <div className="multi-form">
          <div className="multi-row">
            <input type="text" placeholder="From (Delhi)" />
            <input type="text" placeholder="To (Bengaluru)" />
            <input type="date" placeholder="Departure" />
            <select>
              <option>1 Traveller, Economy</option>
              <option>2 Travellers, Economy</option>
              <option>1 Traveller, Business</option>
            </select>
          </div>
          <div className="multi-row">
            <input type="text" placeholder="From (Bengaluru)" />
            <input type="text" placeholder="To (Select City)" />
            <input type="date" placeholder="Departure" />
            <button className="add-btn">+ Add Another City</button>
          </div>
          <button className="search-btn">SEARCH</button>
        </div>
      )}

      <div className="special-fares">
        <p>
          Select a special fare <span className="highlight">EXTRA SAVINGS</span>
        </p>
        <label>
          <input type="radio" name="fare" defaultChecked /> Regular – Regular fares
        </label>
        <label>
          <input type="radio" name="fare" /> Student – Extra discounts/baggage
        </label>
        <label>
          <input type="radio" name="fare" /> Senior Citizen – Up to ₹600 off
        </label>
        <label>
          <input type="radio" name="fare" /> Armed Forces – Up to ₹600 off
        </label>
        <label>
          <input type="radio" name="fare" /> Doctor & Nurses – Up to ₹600 off
        </label>
      </div>
    </div>
  );
};

export default FlightsInterface;
