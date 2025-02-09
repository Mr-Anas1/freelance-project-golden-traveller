import React from "react";

function LocationMap() {
  return (
    <div className="contact-form-right">
      <iframe
        src="https://www.google.com/maps?q=26.3626,50.2058&hl=en&z=15&output=embed"
        width="560"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default LocationMap;
