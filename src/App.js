import React, { useState } from "react";
import Navbar from "./component/Navbar";
import ServiceTabs from "./component/ServiceTabs";
import ProfilePage from "./component/ProfilePage";
import AuthForm from "./component/AuthForm";
import MyTrips from "./component/MyTrips";
import "./index.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showTrips, setShowTrips] = useState(false);

  return (
    <div>
      {showForm ? (
        <AuthForm onClose={() => setShowForm(false)} />
      ) : showProfile ? (
        <ProfilePage onClose={() => setShowProfile(false)} />
      ) : showTrips ? (
        <MyTrips onClose={() => setShowTrips(false)} />
      ) : (
        <>
          <Navbar
            onLoginClick={() => setShowForm(true)}
            onProfileClick={() => setShowProfile(true)}
            onMyTripsClick={() => setShowTrips(true)}
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
