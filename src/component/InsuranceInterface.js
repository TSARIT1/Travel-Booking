import React, { useState } from "react";
import "../style/InsuranceInterface.css";

const InsuranceInterface = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [plan, setPlan] = useState("Regular");

  const destinations = ["Thailand", "UAE", "USA", "Singapore", "Europe"];

  const handleTravellers = (type) => {
    if (type === "inc") setTravellers(travellers + 1);
    else if (type === "dec" && travellers > 1) setTravellers(travellers - 1);
  };

  const handleSubmit = () => {
    if (!destination || !startDate || !endDate) {
      alert("Please select destination and travel dates.");
      return;
    }
    alert(
      `Insurance selected for ${destination} from ${startDate} to ${endDate} for ${travellers} traveller(s) under ${plan} plan.`
    );
  };

  return (
    <div className="insurance-container">
      <div className="insurance-left">
        <h1>International Travel +<br /> Medical Insurance & Assistance</h1>
        <p className="claim">99% Claim settlement ratio</p>

        <div className="info-block">
          <h3>Comprehensive travel + medical insurance by Tata AIG</h3>
          <p>
            Insurance policies covering country-specific visa requirements and
            Schengen Visa Compliant plans.
          </p>
        </div>

        <div className="info-block">
          <h3>Global ON-TRIP Assistance for Travel & Medical Needs</h3>
          <p>
            24/7 call and on-ground support for ambulance, medical consultation,
            baggage loss/delay, lost baggage recovery and more.
          </p>
        </div>
      </div>
      <div className="insurance-card">
        <h2 className="insurance-heading">Travel Destination</h2>
        <p className="insurance-sub">You can select multiple destinations</p>
        <div className="insurance-destinations">
          {destinations.map((d, idx) => (
            <div
              key={idx}
              className={`destination-box ${
                destination === d ? "selected" : ""
              }`}
              onClick={() => setDestination(d)}
            >
              <span>{d}</span>
            </div>
          ))}
          <div
            className={`destination-box ${
              destination === "Other" ? "selected" : ""
            }`}
            onClick={() => setDestination("Other")}
          >
            <span>Other Country</span>
          </div>
        </div>
        <div className="insurance-row">
          <div className="insurance-input">
            <label>Travel Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="insurance-input">
            <label>Travel End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="insurance-row">
          <div className="insurance-input">
            <label>Travellers</label>
            <div className="travellers-box">
              <button onClick={() => handleTravellers("dec")}>-</button>
              <span>{travellers}</span>
              <button onClick={() => handleTravellers("inc")}>+</button>
            </div>
            <small>Senior citizens above 70 yrs are not covered</small>
          </div>
        </div>
        <div className="insurance-row">
          <label>Special Plans (Optional)</label>
          <div className="plans">
            {["Regular", "Annual Multi Trip", "Student"].map((p, idx) => (
              <button
                key={idx}
                className={`plan-btn ${plan === p ? "active" : ""}`}
                onClick={() => setPlan(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div className="insurance-submit">
          <button onClick={handleSubmit}>VIEW PLANS</button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceInterface;
