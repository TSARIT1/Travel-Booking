import React, { useState } from "react";
import "../style/CabsInterface.css";

const CabsInterface = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const handleSearch = () => {
    if (!from || !to || !departure || !pickupTime) {
      alert("Please fill all required fields.");
      return;
    }
    alert(`Cab booked from ${from} to ${to} on ${departure} at ${pickupTime}`);
  };

  return (
    <div className="cab-card">
      <h2 className="cab-heading">Online Cab Booking</h2>
      <div className="trip-options">
        <label>
          <input type="radio" name="trip" defaultChecked /> Outstation One-Way
        </label>
        <label>
          <input type="radio" name="trip" /> Outstation Round-Trip
        </label>
        <label>
          <input type="radio" name="trip" /> Airport Transfers
        </label>
        <label>
          <input type="radio" name="trip" /> Hourly Rentals
        </label>
      </div>
      <div className="cab-form">
        <div className="cab-input">
          <label>From</label>
          <input
            type="text"
            placeholder="Enter City"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="cab-swap">⇆</div>
        <div className="cab-input">
          <label>To</label>
          <input
            type="text"
            placeholder="Enter City"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="cab-input">
          <label>Departure</label>
          <input
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>
        <div className="cab-input">
          <label>Return (Optional)</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <div className="cab-input">
          <label>Pickup Time</label>
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
          />
        </div>
      </div>
      <div className="search-btn-container">
        <button className="search-btn" onClick={handleSearch}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default CabsInterface;
