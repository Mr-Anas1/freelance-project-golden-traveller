import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Visa from "./pages/Visa";
import VisaRequirements from "./components/VisaRequirements";
import Flight from "./pages/Flight";
import Hotel from "./pages/Hotel";
import Insurance from "./pages/Insurance";
import "./App.css";
import License from "./pages/License";
import Passport from "./pages/Passport";
import Corporate from "./pages/Corporate";
import Transfers from "./pages/Transfers";
import Housemaid from "./pages/Housemaid";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/license" element={<License />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/housemaid" element={<Housemaid />} />

          <Route
            path="/visa-requirements/:country"
            element={<VisaRequirements />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
