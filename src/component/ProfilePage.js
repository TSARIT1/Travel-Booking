import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../style/ProfilePage.css";
import image from "../image/co-travel.avif"

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile"); // <-- tab state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    nationality: "",
    maritalStatus: "",
    anniversary: "",
    city: "",
    state: "",
    passport: "",
    expiry: "",
    country: "",
    pan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>MY ACCOUNT</h3>
        <ul>
          <li
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            My Profile
          </li>
          <li
            className={activeTab === "coTravellers" ? "active" : ""}
            onClick={() => setActiveTab("coTravellers")}
          >
            Co-Travellers
          </li>
          <li
            className={activeTab === "devices" ? "active" : ""}
            onClick={() => setActiveTab("devices")}
          >
            Logged In Devices
          </li>
        </ul>
        <div className="sidebar-bottom">
          <p>Reset Password</p>
          <p>Logout</p>
        </div>
      </aside>

      {/* Content area */}
      <main className="profile-content">
        <header className="profile-header">
          <div className="profile-photo">
            <div className="photo-placeholder">Add Photo</div>
          </div>
          <div className="profile-info">
            <p>
              <FaPhoneAlt className="icon" /> 8595107083
            </p>
            <p>
              <FaEnvelope className="icon" /> ayazshahbkbali@gmail.com
            </p>
          </div>
          <div className="wallet">
            <p>myCash ₹ 0</p>
            <button>Buy Gift Cards</button>
          </div>
        </header>

        {/* Switch between tabs */}
        {activeTab === "profile" && (
          <section className="profile-form">
            <h2>My Profile</h2>
            <p className="progress">30% Complete your profile</p>

            <div className="form-grid">
              <input
                type="text"
                placeholder="First & Middle Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Nationality"
                name="nationality"
                value={form.nationality}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Marital Status"
                name="maritalStatus"
                value={form.maritalStatus}
                onChange={handleChange}
              />
              <input
                type="date"
                placeholder="Anniversary"
                name="anniversary"
                value={form.anniversary}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="City of Residence"
                name="city"
                value={form.city}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="State"
                name="state"
                value={form.state}
                onChange={handleChange}
              />
            </div>

            <h3>Documents Details</h3>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Passport No."
                name="passport"
                value={form.passport}
                onChange={handleChange}
              />
              <input
                type="date"
                placeholder="Expiry Date"
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Issuing Country"
                name="country"
                value={form.country}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="PAN Card Number"
                name="pan"
                value={form.pan}
                onChange={handleChange}
              />
            </div>

            <h3>Your Preferences</h3>
            <div className="form-grid">
              <select>
                <option>Domestic Trip Protection Plan</option>
                <option>Other</option>
              </select>
              <select>
                <option>International Travel Insurance Plan</option>
                <option>Other</option>
              </select>
            </div>

            <h3>Frequent Flyer Details</h3>
            <p className="add-link">+ Add</p>

            <button className="save-btn">SAVE</button>
          </section>
        )}

        {activeTab === "coTravellers" && (
          <section className="co-travellers">
            <h2>Co-Travellers</h2>
            <div className="co-travellers-empty">
              <img src={image} alt="Co-Travellers" />
              <p>No Co-travellers saved</p>
              <p>Make bookings faster and easier by saving your Co-traveller details</p>
              <button className="add-btn">+ Add New Co-Traveller</button>
            </div>
          </section>
        )}

        {activeTab === "devices" && (
          <section className="devices">
            <h2>Logged In Devices</h2>
            <p>No devices logged in yet.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProfilePage;
