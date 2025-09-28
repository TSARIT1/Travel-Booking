import React, { useState } from "react";
import Navbar from "./component/Navbar";   // ✅ Navbar
import ServiceTabs from "./component/ServiceTabs";
import ProfilePage from "./component/ProfilePage";
import AuthForm from "./component/AuthForm";
import MyTrips from "./component/MyTrips";
import PaymentForm from "./component/PaymentForm";
import AdminPage from "./component/AdminPage";
import "./index.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showTrips, setShowTrips] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const [profileData, setProfileData] = useState(null);
  const [coTravellers, setCoTravellers] = useState([]);

  return (
    <div>
      {showForm ? (
        <AuthForm onClose={() => setShowForm(false)} />
      ) : showProfile ? (
        <ProfilePage
          onClose={() => setShowProfile(false)}
          onSaveProfile={(data) => setProfileData(data)}
          onSaveCoTraveller={(traveller) =>
            setCoTravellers((prev) => [...prev, traveller])
          }
        />
      ) : showTrips ? (
        <MyTrips onClose={() => setShowTrips(false)} />
      ) : showPayment ? (
        <PaymentForm onClose={() => setShowPayment(false)} />
      ) : showAdmin ? (
        <AdminPage
          profileData={profileData}
          coTravellers={coTravellers}
          onClose={() => setShowAdmin(false)}
          onLoginClick={() => setShowForm(true)}
          onProfileClick={() => setShowProfile(true)}
          onMyTripsClick={() => setShowTrips(true)}
          onMakePaymentClick={() => setShowPayment(true)}
          onAdminClick={() => setShowAdmin(true)}
        />
      ) : (
        <>
          <Navbar
            onLoginClick={() => setShowForm(true)}
            onProfileClick={() => setShowProfile(true)}
            onMyTripsClick={() => setShowTrips(true)}
            onMakePaymentClick={() => setShowPayment(true)}
            onAdminClick={() => setShowAdmin(true)}
          />
          <div className="hero">
            <ServiceTabs />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
