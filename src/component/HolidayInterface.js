import React from "react";
import "../style/HolidayInterface.css";

const HolidayInterface = () => {
  return (
    <div className="holiday-card">
      <h2>Holiday Packages</h2>

      <div className="holiday-form">
        <div className="form-group">
          <label>From City</label>
          <input type="text" placeholder="New Delhi, India" />
        </div>

        <div className="form-group">
          <label>To City / Country / Category</label>
          <input type="text" placeholder="Goa" />
        </div>

        <div className="form-group">
          <label>Departure Date</label>
          <input type="date" />
        </div>

      
        <div className="form-group">
          <label>Rooms & Guests</label>
          <select>
            <option>Select Rooms</option>
            <option>1 Room, 2 Adults</option>
            <option>2 Rooms, 4 Adults</option>
          </select>
        </div>
        <div className="form-group">
          <label>Filters</label>
          <select>
            <option>Select Filters (Optional)</option>
            <option>Budget Friendly</option>
            <option>Luxury</option>
            <option>Family</option>
            <option>Couple / Honeymoon</option>
          </select>
        </div>
        <div className="form-group search-btn-wrap">
          <button className="search-btn">SEARCH</button>
        </div>
      </div>
    </div>
  );
};

export default HolidayInterface;
