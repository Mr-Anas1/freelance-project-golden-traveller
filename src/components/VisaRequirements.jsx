import React from "react";
import { useParams } from "react-router-dom";
import visaRequirementsData from "./visaRequirementsData";
import { useEffect } from "react";

const VisaRequirements = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openWhatsapp = () => {
    window.location.href = "https://wa.me/+966559874003";
  };

  const { country } = useParams();
  console.log("Country from URL params:", country); // Debug output
  const requirements = visaRequirementsData[country];

  if (!requirements) return <p>No visa requirements found for {country}</p>;

  const renderRequirements = (data) => {
    if (Array.isArray(data)) {
      return (
        <ul>
          {data.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      );
    } else if (typeof data === "object") {
      return (
        <div>
          {Object.entries(data).map(([key, value]) => (
            <div key={key}>
              <h3>{key.replace(/_/g, " ")}</h3>
              {renderRequirements(value)}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="visa-requirements">
        <h2>Visa Requirements for {country}</h2>
        {renderRequirements(requirements)}

        <div className="visa-requirements-cta">
          <button onClick={openWhatsapp}>Contact</button>
        </div>
      </div>
    </>
  );
};

export default VisaRequirements;
