import React, { useState, useEffect } from "react";
import { loadFlags } from "../constants/loadFlags";
import CountryFlag from "../helpers/CountryFlag";
import { useNavigate } from "react-router-dom";

function VisaCountryBox() {
  const [flags, setFlags] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadFlags().then((loadedFlags) => {
      setFlags(loadedFlags);
      setLoading(false);
    });
  }, []);

  const handleCountryClick = (countryName) => {
    const formattedCountry = countryName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/visa-requirements/${formattedCountry}`);
  };

  return (
    <div className="visaCountryBox">
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="visaCountryList">
          {Object.entries(flags).map(([code, { flag, name }]) => (
            <div
              key={code}
              className="visaCountryItem"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              onClick={() => handleCountryClick(name)}
            >
              <CountryFlag countryCode={code} />
              <span className="visaCountryName">{name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VisaCountryBox;
