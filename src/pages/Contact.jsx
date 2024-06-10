// App.js
import React from 'react';
import ContactForm from '../components/ContactForm';
import LocationMap from '../components/LocationMap';
import image from '../images/image-removebg-preview.png';
import ContactDetails from '../components/ContactDetails';

function Contact() {
  return (
    <>
      <div id='contact' className="contact-container">
        <div className="contact-title">
          <h1>Contact Us</h1>
          {/* <img
            src={image}
            alt="About Us"
            className="wavy"
          /> */}
        </div>
        <div className="contact-form">
          <ContactForm />
          <LocationMap />
        </div>
        <ContactDetails />
      </div>
    </>
  );
}

export default Contact;
