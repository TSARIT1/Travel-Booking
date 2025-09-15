import React from "react";
import "../style/navbar.css";

export default function Navbar({ onLoginClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">
          Tsar <span className="highlight">Travel</span> tripe
        </h2>
      </div>

      <div className="navbar-center">
        <div className="nav-item">
          <h4>List Your Property</h4>
          <p>Grow your business!</p>
        </div>
        <div className="nav-item">
          <h4>Introducing myBiz</h4>
          <p>Business Travel Solution</p>
        </div>
        <div className="nav-item">
          <h4>My Trips</h4>
          <p>Manage your bookings</p>
        </div>
      </div>

      <div className="navbar-right">
        <button className="login-btn" onClick={onLoginClick}>
          Login / Create Account
        </button>
      </div>
    </nav>
  );
}
