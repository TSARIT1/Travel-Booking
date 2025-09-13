import React, { useState } from "react";
import "../style/CruiseInterface.css";

const CruiseInterface = () => {
  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("");

  const destinations = [
    "Goa", "Singapore", "Dubai", "Maldives", "Thailand",
    "Europe", "Australia", "Caribbean", "Alaska"
  ];

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const handleSearch = () => {
    if (!destination) {
      alert("⚠️ Please select a destination.");
      return;
    }
    alert(`Cruise booked to ${destination} in ${month || "Any Month"}`);
  };

  return (
    <div className="cruise-container">
      <h2 className="heading">Book Domestic and International Cruises</h2>

      <div className="form-row">
        {/* Destination */}
        <div className="form-group">
          <label>CRUISING TO <span className="required">*</span></label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Select Destination</option>
            {destinations.map((d, idx) => (
              <option key={idx} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Travel Month */}
        <div className="form-group">
          <label>TRAVEL MONTH <span className="optional">(Optional)</span></label>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            {months.map((m, idx) => (
              <option key={idx} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Search */}
        <div className="search-group">
          <button className="search-btn" onClick={handleSearch}>
            🔍 Search Cruises
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseInterface;
