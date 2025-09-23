import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../style/ProfilePage.css";
import image from "../image/co-travel.avif";

const ProfilePage = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showCoForm, setShowCoForm] = useState(false);

  const [profileForm, setProfileForm] = useState({
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

  const [coForm, setCoForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    relationship: "",
    mobile: "",
    passport: "",
    expiry: "",
    country: "",
    frequentFlyer: "",
  });

  const handleProfileChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const handleCoChange = (e) => {
    setCoForm({ ...coForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <aside className="sidebar">
        <h3>MY ACCOUNT</h3>
        <ul>
          <li onClick={onClose}>Home</li>
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

        {activeTab === "profile" && (
          <section className="profile-form">
            <h2 style={{ color: "black" }}>My Profile</h2>
            <p className="progress">30% Complete your profile</p>

            <div className="form-grid">
              <div>
                <label>First & Middle Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={profileForm.firstName}
                  onChange={handleProfileChange}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={profileForm.lastName}
                  onChange={handleProfileChange}
                />
              </div>
              <div>
                <label>Gender</label>
                <select
                  name="gender"
                  value={profileForm.gender}
                  onChange={handleProfileChange}
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={profileForm.dob}
                  onChange={handleProfileChange}
                />
              </div>
              <div>
                <label>Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={profileForm.nationality}
                  onChange={handleProfileChange}
                />
              </div>
              <div>
                <label>Marital Status</label>
                <input
                  type="text"
                  name="maritalStatus"
                  value={profileForm.maritalStatus}
                  onChange={handleProfileChange}
                />
              </div>
              <div>
                <label>Anniversary</label>
                <input
                  type="date"
                  name="anniversary"
                  value={profileForm.anniversary}
                  onChange={handleProfileChange}
                />
              </div>
              <div>
                <label>City of Residence</label>
                <input
                  type="text"
                  name="city"
                  value={profileForm.city}
                  onChange={handleProfileChange}
                />
              </div>
              <div>
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={profileForm.state}
                  onChange={handleProfileChange}
                />
              </div>
            </div>

            <h3>Documents Details</h3>
            <div className="form-grid">
              <div>
                <label>Passport No.</label>
                <input
                  type="text"
                  name="passport"
                  value={profileForm.passport}
                  onChange={handleProfileChange}
                />
              </div>
              <div>
                <label>Expiry Date</label>
                <input
                  type="date"
                  name="expiry"
                  value={profileForm.expiry}
                  onChange={handleProfileChange}
                />
              </div>
              <div>
                <label>Issuing Country</label>
                <input
                  type="text"
                  name="country"
                  value={profileForm.country}
                  onChange={handleProfileChange}
                />
              </div>
              <div>
                <label>PAN Card Number</label>
                <input
                  type="text"
                  name="pan"
                  value={profileForm.pan}
                  onChange={handleProfileChange}
                />
              </div>
            </div>

            <h3>Your Preferences</h3>
            <div className="form-grid">
              <div>
                <label>Domestic Trip Protection Plan</label>
                <select>
                  <option>Domestic Trip Protection Plan</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label>International Travel Insurance Plan</label>
                <select>
                  <option>International Travel Insurance Plan</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <h3>Frequent Flyer Details</h3>
            <p className="add-link">+ Add</p>

            <button className="save-btn">SAVE</button>
          </section>
        )}

        {activeTab === "coTravellers" && (
          <section className="co-travellers">
            <h2 style={{ color: "black" }}>Co-Travellers</h2>
            {!showCoForm ? (
              <div className="co-travellers-empty">
                <img src={image} alt="Co-Travellers" />
                <p>No Co-travellers saved</p>
                <p>
                  Make bookings faster and easier by saving your Co-traveller
                  details
                </p>
                <button
                  className="add-btn"
                  onClick={() => setShowCoForm(true)}
                >
                  + Add New Co-Traveller
                </button>
              </div>
            ) : (
              <div className="profile-form">
                <h3 style={{ color: "black" }}>Add Co-Traveller</h3>
                <div className="form-grid">
                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={coForm.firstName}
                      onChange={handleCoChange}
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={coForm.lastName}
                      onChange={handleCoChange}
                    />
                  </div>
                  <div>
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={coForm.gender}
                      onChange={handleCoChange}
                    >
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div>
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={coForm.dob}
                      onChange={handleCoChange}
                    />
                  </div>
                  <div>
                    <label>Relationship with Traveller</label>
                    <select
                      name="relationship"
                      value={coForm.relationship}
                      onChange={handleCoChange}
                    >
                      <option value="">Select</option>
                      <option>Spouse</option>
                      <option>Child</option>
                      <option>Sibling</option>
                      <option>GrandParent</option>
                      <option>Friend</option>
                      <option>Parent</option>
                      <option>Colleague</option>
                      <option>Relative</option>
                      <option>Parent In law</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      value={coForm.mobile}
                      onChange={handleCoChange}
                    />
                  </div>
                </div>

                <h3>Documents Details</h3>
                <div className="form-grid">
                  <div>
                    <label>Passport No.</label>
                    <input
                      type="text"
                      name="passport"
                      value={coForm.passport}
                      onChange={handleCoChange}
                    />
                  </div>
                  <div>
                    <label>Expiry Date</label>
                    <input
                      type="date"
                      name="expiry"
                      value={coForm.expiry}
                      onChange={handleCoChange}
                    />
                  </div>
                  <div>
                    <label>Issuing Country</label>
                    <input
                      type="text"
                      name="country"
                      value={coForm.country}
                      onChange={handleCoChange}
                    />
                  </div>
                </div>

                <h3>Frequent Flyer Details</h3>
                <div className="form-grid">
                  <div>
                    <label>Frequent Flyer Number</label>
                    <input
                      type="text"
                      name="frequentFlyer"
                      value={coForm.frequentFlyer}
                      onChange={handleCoChange}
                    />
                  </div>
                </div>

                <button className="save-btn">SAVE</button>
              </div>
            )}
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
