import React from "react";
import VisaCountryBox from "../components/VisaCountryBox";

function Visa() {
  return (
    <div className="visa">
      <div className="visaContainer">
        <h1>Visa Services</h1>
        <div className="visaContainer-countries">
          <VisaCountryBox />
        </div>
      </div>
    </div>
  );
}

export default Visa;
