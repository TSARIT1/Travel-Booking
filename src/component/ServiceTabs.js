import React, { useState } from "react";
import {
  FaPlane,
  FaHotel,
  FaTrain,
  FaBus,
  FaCar,
  FaUmbrellaBeach,
  FaPassport,
  FaShip,
  FaMoneyBill,
} from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

// import Navbar from "./Navbar";

import "../style/ServiceTabs.css";

import HotelInterface from "./HotelInterface";
import HolidayInterface from "./HolidayInterface";
import TrainInterface from "./TrainInterface";
import BusInterface from "./BusInterface";
import FlightsInterface from "./FlightsInterface";
import CabsInterface from "./CabsInterface";
import VisaInterface from "./VisaInterface";
import CruiseInterface from "./CruiseInterface";
import ForexInterface from "./ForexInterface";
import InsuranceInterface from "./InsuranceInterface";

const ServiceTabs = () => {

  const [activeTab, setActiveTab] = useState("flights");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="services">
        <div
          className={`service ${activeTab === "flights" ? "active" : ""}`}
          onClick={() => handleClick("flights")}
        >
          <FaPlane className="icon" />
          <p>Flights</p>
        </div>
        <div
          className={`service ${activeTab === "hotels" ? "active" : ""}`}
          onClick={() => handleClick("hotels")}
        >
          <FaHotel className="icon" />
          <p>Hotels</p>
        </div>
        <div className="service" onClick={() => handleClick("holiday")}>
          <FaUmbrellaBeach className="icon" />
          <p>Holiday</p>
        </div>
        <div className="service" onClick={() => handleClick("trains")}>
          <FaTrain className="icon" />
          <p>Trains</p>
        </div>
        <div className="service" onClick={() => handleClick("buses")}>
          <FaBus className="icon" />
          <p>Buses</p>
        </div>
        <div className="service" onClick={() => handleClick("cabs")}>
          <FaCar className="icon" />
          <p>Cabs</p>
        </div>
        <div className="service" onClick={() => handleClick("visa")}>
          <FaPassport className="icon" />
          <p>Visa</p>
        </div>
        <div className="service" onClick={() => handleClick("cruise")}>
          <FaShip className="icon" />
          <p>Cruise</p>
        </div>
        <div className="service" onClick={() => handleClick("forex")}>
          <FaMoneyBill className="icon" />
          <p>Forex</p>
        </div>
        <div className="service" onClick={() => handleClick("insurance")}>
          <FaShieldAlt className="icon" />
          <p>Insurance</p>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "flights" && <FlightsInterface />}
        {activeTab === "hotels" && <HotelInterface />}
        {activeTab === "holiday" && <HolidayInterface />}
        {activeTab === "trains" && <TrainInterface />}
        {activeTab === "buses" && <BusInterface />}
        {activeTab === "cabs" && <CabsInterface />}
        {activeTab === "visa" && <VisaInterface />}
        {activeTab === "cruise" && <CruiseInterface />}
        {activeTab === "forex" && <ForexInterface />}
         {activeTab === "insurance" && <InsuranceInterface />}
      </div>
    </>
  );
};

export default ServiceTabs;
