import React from "react";

function FeatureBox({ icon, title, description }) {
  return (
    <div className="featurebox">
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureBox;
