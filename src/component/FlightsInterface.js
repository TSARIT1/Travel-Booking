import React from "react";
import "../style/FlightsInterface.css";

const FlightsInterface = () => {
  return (
    <div className="flight-card">
      <h2>Book Flights</h2>

      <div className="trip-options">
        <button className="active">One Way</button>
        <button>Round Trip</button>
        <button>Multi City</button>
      </div>

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

      <div className="special-fares">
        <p>
          Select a special fare{" "}
          <span className="highlight">EXTRA SAVINGS</span>
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
