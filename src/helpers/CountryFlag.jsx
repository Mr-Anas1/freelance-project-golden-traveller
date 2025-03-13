import React, { useState, useEffect } from "react";

const CountryFlag = ({ countryCode }) => {
  const [flagSrc, setFlagSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFlag = async () => {
      try {
        const flagFile = await import(
          `../helpers/svg/${countryCode.toLowerCase()}.svg`
        );
        setFlagSrc(flagFile.default);
      } catch (error) {
        console.error(`Flag not found for country: ${countryCode}`);
        setFlagSrc(null);
      }
      setLoading(false);
    };

    loadFlag();
  }, [countryCode]);

  if (loading) return <span className="loading">Loading...</span>;

  return flagSrc ? (
    <div
      className="countryBox"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <img
        className="countryImage"
        src={flagSrc}
        alt={countryCode}
        width={30}
        height={20}
      />
    </div>
  ) : (
    <span className="flagNotFound">🚩 Flag Not Found</span>
  );
};

export default CountryFlag;
