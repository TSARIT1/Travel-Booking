import React, { useState } from "react";
import Navbar from "./component/Navbar";
import ServiceTabs from "./component/ServiceTabs";
import ProfilePage from "./component/ProfilePage";
import AuthForm from "./component/AuthForm";
import "./index.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      {showForm ? (
        <AuthForm onClose={() => setShowForm(false)} />
      ) : showProfile ? (
        <ProfilePage onClose={() => setShowProfile(false)} />
      ) : (
        <>
          <Navbar
            onLoginClick={() => setShowForm(true)}
            onProfileClick={() => setShowProfile(true)}
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
