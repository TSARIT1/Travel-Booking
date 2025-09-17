import React, { useState, useEffect } from "react";
import "../style/auth.css"; 

export default function AuthForm({ onClose }) {
  const [isRegister, setIsRegister] = useState(false);


  useEffect(() => {
    const container = document.querySelector(".container");
    if (isRegister) {
      container?.classList.add("active");
    } else {
      container?.classList.remove("active");
    }
  }, [isRegister]);

  return (
    <div className="container">
      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>
      <div className="form-box Login">
        <h2 className="animation" style={{ "--D": 0, "--S": 21 }}>Login</h2>
        <form>
          <div className="input-box animation" style={{ "--D": 1, "--S": 22 }}>
            <input type="text" required />
            <label style={{color:"#e46033"}}>Username</label>
            <box-icon type="solid" name="user" color="gray"></box-icon>
          </div>

          <div className="input-box animation" style={{ "--D": 2, "--S": 23 }}>
            <input type="password" required/>
            <label  style={{color:"#e46033"}}>Password</label>
            <box-icon name="lock-alt" type="solid" color="gray"></box-icon>
          </div>

          <div className="input-box animation" style={{ "--D": 3, "--S": 24 }}>
            <button className="btn" type="submit">Login</button>
          </div>

          <div className="regi-link animation" style={{ "--D": 4, "--S": 25 }}>
            <p>
              Don’t have an account? <br />
              <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(true); }}>
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-content Login">
        <h2 className="animation" style={{ "--D": 0, "--S": 20 }}>WELCOME BACK!</h2>
        <p className="animation" style={{ "--D": 1, "--S": 21 }}>
          We are happy to have you with us again. If you need anything, we are here to help.
        </p>
      </div>
      <div className="form-box Register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>Register</h2>
        <form>
          <div className="input-box animation" style={{ "--li": 18, "--S": 1 }}>
            <input type="text" required />
            <label>Username</label>
            <box-icon type="solid" name="user" color="gray"></box-icon>
          </div>

          <div className="input-box animation" style={{ "--li": 19, "--S": 2 }}>
            <input type="email" required />
            <label>Email</label>
            <box-icon name="envelope" type="solid" color="gray"></box-icon>
          </div>

          <div className="input-box animation" style={{ "--li": 19, "--S": 3 }}>
            <input type="password" required />
            <label>Password</label>
            <box-icon name="lock-alt" type="solid" color="gray"></box-icon>
          </div>

          <div className="input-box animation" style={{ "--li": 20, "--S": 4 }}>
            <button className="btn" type="submit">Register</button>
          </div>

          <div className="regi-link animation" style={{ "--li": 21, "--S": 5 }}>
            <p>
              Already have an account? <br />
              <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(false); }}>
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-content Register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>WELCOME!</h2>
        <p className="animation" style={{ "--li": 18, "--S": 1 }}>
          We’re delighted to have you here. If you need any assistance, feel free to reach out.
        </p>
      </div>
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "#e46033",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
          color: "#fff",
          borderRadius: "5px",
          zIndex: 999
        }}
      >
        ✖
      </button>
    </div>
  );
}
