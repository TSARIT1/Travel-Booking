import React, { useState } from "react";
import "../style/payment.css";

export default function PaymentForm() {
  const [bookingId, setBookingId] = useState("");
  const [emailOrMobile, setEmailOrMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingId) {
      alert("Booking ID can't be left blank.");
      return;
    }
    if (!emailOrMobile) {
      alert("Email or Mobile number is required.");
      return;
    }
    alert("Payment process initiated!");
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2>Enter below details to proceed</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Booking ID</label>
            <input
              type="text"
              placeholder="Eg IN1B1602073111395"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              required
            />
            {!bookingId && <span className="error-text">Booking ID can't be left blank.</span>}
          </div>

          <div className="form-group">
            <label>Email or Mobile no.</label>
            <input
              type="text"
              placeholder="Enter email or mobile number"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>

        <p className="tnc">
          By proceeding you agree to MakeMyTrip’s{" "}
          <a href="#">T&amp;C’s</a> and <a href="#">Privacy</a>
        </p>
      </div>
    </div>
  );
}
