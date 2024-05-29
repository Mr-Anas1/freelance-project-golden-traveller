// LocationMap.js
import React from 'react';

function LocationMap() {
  return (
    <div className="contact-form-right">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092443!2d144.95373531568093!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f7d5f6c23!2sGoogle!5e0!3m2!1sen!2sau!4v1572568200007!5m2!1sen!2sau"
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
