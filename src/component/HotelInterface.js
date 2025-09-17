import React from "react";
import "../style/HotelInterface.css";

const HotelInterface = () => {
  return (
    <div className="hotel-card">
      <h2>Book Hotels</h2>

      <div className="hotel-form">
        <div className="form-group">
          <label>City, Property Name Or Location</label>
          <input type="text" placeholder="Goa, India" />
        </div>
        <div className="form-group">
          <label>Check-In</label>
          <input type="date" / >
        </div>
        <div className="form-group">
          <label>Check-Out</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Rooms & Guests</label>
          <select className="guest">
            <option>1 Room 2 Adults</option>
            <option>1 Room 1 Adult</option>
            <option>2 Rooms 4 Adults</option>
          </select>
        </div>
        <div className="form-group">
          <label>Price Per Night</label>
          <select>
            <option>₹0 - ₹1500</option>
            <option>₹1500 - ₹2500</option>
            <option>₹2500 - ₹5000</option>
            <option>₹5000+</option>
          </select>
        </div>
        <div className="form-group search-btn-wrap">
          <button className="search-btn">SEARCH</button>
        </div>
      </div>
    </div>
  );
};

export default HotelInterface;
