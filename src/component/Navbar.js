import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../style/navbar.css";

export default function Navbar({
  onLoginClick,
  onProfileClick,
  onMyTripsClick,
  onMakePaymentClick,
  onAdminClick,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        <div
          className="nav-item"
          onClick={onMyTripsClick}
          style={{ cursor: "pointer" }}
        >
          <h4>My Trips</h4>
          <p>Manage your bookings</p>
        </div>
      </div>

      <div className="navbar-right">
        <button className="login-btn" onClick={onLoginClick}>
          Login / Create Account
        </button>

        <div className="profile-icon" onClick={toggleDropdown}>
          <FaUserCircle size={28} color="#e46033" />
        </div>

        {isDropdownOpen && (
          <div className="profile-dropdown">
            <p onClick={onProfileClick}>My Profile</p>
            <p onClick={onMyTripsClick}>My Trips</p>
            <p onClick={onMakePaymentClick}>Make Payment</p>
            <p onClick={onAdminClick}>Admin</p>
          </div>
        )}
      </div>
    </nav>
  );
}
