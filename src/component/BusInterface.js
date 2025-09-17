import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import "../style/BusInterface.css";

const BusInterface = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const cities = [
    "Delhi, Delhi",
    "Kanpur, Uttar Pradesh",
    "Lucknow, Uttar Pradesh",
    "Mumbai, Maharashtra",
    "Pune, Maharashtra",
    "Bengaluru, Karnataka",
    "Chennai, Tamil Nadu",
    "Hyderabad, Telangana",
    "Jaipur, Rajasthan",
    "Goa, Goa",
  ];

  const swapCities = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  const handleSearch = () => {
    if (!fromCity || !toCity || !travelDate) {
      alert("Please select From, To and Date before searching.");
      return;
    }
    alert(`Searching buses from ${fromCity} to ${toCity} on ${travelDate}`);
  };

  return (
    <div className="bus-card">
      <h2 className="bus-title">Bus Ticket Booking</h2>

      <div className="bus-form">
        <div className="bus-input-box">
          <label>From</label>
          <select value={fromCity} onChange={(e) => setFromCity(e.target.value)} style={{color:"black"}}>
            <option value="" >Select City</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city} style={{color:"black"}}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="bus-swap-btn" onClick={swapCities}>
          <FaExchangeAlt style={{color:"black"}}/>
        </button>
        <div className="bus-input-box">
          <label>To</label>
          <select value={toCity} onChange={(e) => setToCity(e.target.value)}style={{color:"black"}}>
            <option value=""style={{color:"black"}}>Select City</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}style={{color:"black"}}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="bus-input-box">
          <label>Travel Date</label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            style={{color:"black"}}
          />
        </div>
        <div className="bus-search-box">
          <button className="bus-search-btn" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusInterface;
