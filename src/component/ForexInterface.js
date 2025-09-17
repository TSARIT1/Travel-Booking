import React from "react";
import "../style/ForexInterface.css"; // CSS file import
import image from "../image/card.jpeg"
const ForexInterface = () => {
  return (
    <div className="forex-container">
      <div className="forex-header">
        <span className="forex-label">Lowest Rate Guarantee</span>
        <h2 className="forex-rate">
          USD @ 85.55 <span className="forex-inr">INR</span>
        </h2>
        <button className="forex-link">More Info →</button>
      </div>
      <p className="forex-delivery">
        Door-step Delivery | Across 185+ Indian cities
      </p>
      <div className="forex-grid">
       
        <div className="forex-card">
          <div className="forex-card-content">
            <img
              src={image}
              alt="Card"
              className="forex-img"
            />
            <div>
              <h3 className="forex-title">Multicurrency Card</h3>
              <p className="forex-text">
                Zero forex mark-up | Accepted in 150+ countries | Up to 5% more
                savings | Offers & cashback
              </p>
            </div>
          </div>
          <button className="forex-btn">Get Your Card</button>
        </div>

       
        <div className="forex-card">
          <div className="forex-card-content">
            <img
              src="https://img.icons8.com/color/96/money-bag-euro.png"
              alt="Currency"
              className="forex-img"
            />
            <div>
              <h3 className="forex-title">Foreign Currency Notes</h3>
              <p className="forex-text">
                40+ currencies | Best rates | Genuine notes from RBI licensed
                companies
              </p>
            </div>
          </div>
          <button className="forex-btn">Buy Currency</button>
        </div>
      </div>

     
      <p className="forex-footer">
        * Net effective rate after cashback is applied
      </p>
    </div>
  );
};

export default ForexInterface;
