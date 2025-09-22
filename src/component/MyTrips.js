import React, { useState } from "react";
import "../style/myTrips.css";
import { FaSuitcase, FaTimesCircle, FaCheckSquare } from "react-icons/fa";
import tripe from "../image/tripe.png";

export default function MyTrips({ onClose }) {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="mytrips-container">
      <div className="breadcrumb">My Account &gt; My Trips</div>

      <div className="mytrips-box">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "upcoming" ? "active upcoming" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            <FaSuitcase /> UPCOMING
          </div>
          <div
            className={`tab ${activeTab === "cancelled" ? "active cancelled" : ""}`}
            onClick={() => setActiveTab("cancelled")}
          >
            <FaTimesCircle /> CANCELLED
          </div>
          <div
            className={`tab ${activeTab === "completed" ? "active completed" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            <FaCheckSquare /> COMPLETED
          </div>
        </div>

        <div className="trip-content">
          <div className="empty-box">
            <img
              src={tripe}
              alt="suitcase"
              className="empty-icon"
            />
            <h3 style={{color:"black"}}>Looks empty, you've no {activeTab} bookings.</h3>
            <p style={{color:"black"}}>When you book a trip, you will see your itinerary here.</p>
            <button className="plan-btn" onClick={onClose}>PLAN A TRIP</button> 
          </div>
        </div>
      </div>
    </div>
  );
}
