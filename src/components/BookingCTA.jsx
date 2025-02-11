import React from "react";

function BookingCTA() {
  return (
    <div className="booking-section">
      <p>
        Book with us for hassle-free travel, unbeatable prices, and support you
        can count on!
      </p>

      <a
        href="mailto:bookings@g-travel.com.sa?subject=Flight%20Ticket&body=Contact%20number%3A"
        className="booking-btn"
      >
        Book Now
      </a>

      <div className="contact-info">
        Please include your contact number in the email.
      </div>
    </div>
  );
}

export default BookingCTA;
