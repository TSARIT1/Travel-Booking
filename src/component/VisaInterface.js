import React, { useState } from "react";
import "../style/VisaInterface.css";

const VisaInterface = () => {
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const destinations = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Dubai",
    "Singapore",
    "Thailand",
    "Germany",
    "France",
    "Japan",
  ];

  const handleSearch = () => {
    if (!destination || !departureDate) {
      alert("Please select Destination and Departure Date.");
      return;
    }
    alert(
      `Applying Visa for ${destination}\nDeparture: ${departureDate}\nReturn: ${returnDate || "Not Selected"}`
    );
  };

  return (
    <div className="visa-card">
      <h2 className="title">Apply for a Visa : On Time, Powered by Experts</h2>

      <div className="visa-form">
       
        <div className="input-box">
          <label>Select Destination</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Where are you going?</option>
            {destinations.map((d, idx) => (
              <option key={idx} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="input-box">
          <label>Date of Departure</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label>Date of Return</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <div className="search-box">
          <button className="search-btn" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaInterface;
