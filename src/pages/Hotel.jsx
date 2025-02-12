import React from "react";
import BookingCTA from "../components/BookingCTA";
import {
  MdHotel,
  MdAttachMoney,
  MdLocationCity,
  MdEventAvailable,
  MdHeadsetMic,
} from "react-icons/md";
import FeatureBox from "../components/FeatureBox";
import { useEffect } from "react";

function Hotel() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className="hotel">
      <div className="hotel-container">
        <h1>Hotel Bookings</h1>

        <div className="features">
          <FeatureBox
            icon={<MdHotel color="#ff9800" size={60} />}
            title="Find Your Perfect Stay"
            description="From budget-friendly to luxury, discover hotels that fit your style and needs."
          />

          <FeatureBox
            icon={<MdAttachMoney color="#4caf50" size={60} />}
            title="Best Rates Guaranteed"
            description="Enjoy peace of mind with our lowest price promise on every booking."
          />

          <FeatureBox
            icon={<MdLocationCity color="#2196f3" size={60} />}
            title="Extensive Hotel Selection"
            description="Whether it’s a bustling city or a serene escape, choose from thousands of hotels around the world."
          />

          <FeatureBox
            icon={<MdEventAvailable color="#e91e63" size={60} />}
            title="Easy Booking Process"
            description="Reserve your stay in just a few steps. Flexible options available for changes or cancellations."
          />

          <FeatureBox
            icon={<MdHeadsetMic color="#673ab7" size={60} />}
            title="24/7 Support"
            description="We're here anytime you need assistance with your hotel booking."
          />
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}

export default Hotel;
