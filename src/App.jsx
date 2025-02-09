import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Visa from "./pages/Visa";
import VisaRequirements from "./components/VisaRequirements";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/visa" element={<Visa />} />
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
