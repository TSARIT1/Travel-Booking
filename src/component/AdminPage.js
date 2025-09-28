import React from "react";
import Navbar from "./Navbar";
import "../style/admin.css";

const AdminPage = ({
  profileData,
  coTravellers,
  onClose,
  onLoginClick,
  onProfileClick,
  onMyTripsClick,
  onMakePaymentClick,
  onAdminClick,
}) => {
  return (
   <>
   <div className="admin-navbar-wrapper">
        <Navbar
          onLoginClick={onLoginClick}
          onProfileClick={onProfileClick}
          onMyTripsClick={onMyTripsClick}
          onMakePaymentClick={onMakePaymentClick}
          onAdminClick={onAdminClick}
        />
      </div>
     <div className="admin-page">
      {/* ✅ Navbar always at the top */}

      {/* ✅ All admin content comes below navbar */}
      <div className="admin-content">
        <div className="admin-header">
          <h2>Admin Dashboard</h2>
          <button className="nav-close-btn" onClick={onClose}>
            X
          </button>
        </div>

        {/* Profile Section */}
        <section className="admin-section">
          <h3>My Profile Data</h3>
          {profileData ? (
            <div className="data-card">
              <p>
                <b>Name:</b> {profileData.firstName} {profileData.lastName}
              </p>
              <p>
                <b>Gender:</b> {profileData.gender}
              </p>
              <p>
                <b>DOB:</b> {profileData.dob}
              </p>
              <p>
                <b>Nationality:</b> {profileData.nationality}
              </p>
              <p>
                <b>City:</b> {profileData.city}, {profileData.state}
              </p>
              <p>
                <b>Passport:</b> {profileData.passport} (Exp:{" "}
                {profileData.expiry})
              </p>
              <p>
                <b>PAN:</b> {profileData.pan}
              </p>
            </div>
          ) : (
            <p>No Profile Data Saved</p>
          )}
        </section>

        {/* Co-Travellers Section */}
        <section className="admin-section">
          <h3>Co-Travellers</h3>
          {coTravellers.length > 0 ? (
            coTravellers.map((trav, i) => (
              <div key={i} className="data-card">
                <p>
                  <b>
                    {trav.firstName} {trav.lastName}
                  </b>
                </p>
                <p>Gender: {trav.gender}</p>
                <p>DOB: {trav.dob}</p>
                <p>Relationship: {trav.relationship}</p>
                <p>Mobile: {trav.mobile}</p>
                <p>
                  Passport: {trav.passport} (Exp: {trav.expiry})
                </p>
                <p>Country: {trav.country}</p>
                <p>Frequent Flyer: {trav.frequentFlyer}</p>
              </div>
            ))
          ) : (
            <p>No Co-Travellers Saved</p>
          )}
        </section>

        {/* Come Back Button */}
        <div className="admin-footer">
          <button className="come-back-btn" onClick={onClose}>
            Come Back
          </button>
        </div>
      </div>
    </div>
   </>
  );
};

export default AdminPage;
