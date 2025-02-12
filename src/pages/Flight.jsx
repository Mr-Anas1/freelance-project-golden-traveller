import React from "react";
import FeatureBox from "../components/FeatureBox";
import {
  MdWorkOutline,
  MdAttachMoney,
  MdLocalOffer,
  MdHeadsetMic,
} from "react-icons/md";
import BookingCTA from "../components/BookingCTA";
import { useEffect } from "react";

function Flight() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className="flight">
      <div>
        <h1>All Travel Needs Made Easy</h1>

        <h2>Why Choose Us?</h2>

        <div className="features">
          <FeatureBox
            icon={<MdWorkOutline color="#ffc000" size={60} />}
            title="Effortless Bookings"
            description="Booking flights has never been easier, with unbeatable deals at your fingertips."
          />

          <FeatureBox
            icon={<MdAttachMoney color="#00b894" size={60} />}
            title="Best Price Guarantee"
            description="Get the lowest rates on flights, hotels, and vacation packages, every time."
          />

          <FeatureBox
            icon={<MdLocalOffer color="#ff4757" size={60} />}
            title="Exclusive Offers"
            description="Enjoy special discounts on flights, car rentals, hotels, and tours, curated just for you."
          />

          <FeatureBox
            icon={<MdHeadsetMic color="#3742fa" size={60} />}
            title="24/7 Customer Support"
            description="We're here for you around the clock, ready to assist with all your travel needs."
          />
        </div>
      </div>
      <BookingCTA />
    </div>
  );
}

export default Flight;
