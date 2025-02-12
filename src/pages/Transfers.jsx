import React, { useEffect } from "react";
import BookingCTA from "../components/BookingCTA";
import FeatureBox from "../components/FeatureBox";
import {
  MdDirectionsCar,
  MdAttachMoney,
  MdStars,
  MdSecurity,
} from "react-icons/md";

function Transfers() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className="transfer">
      <div className="transfer-container">
        <h1>Why Choose Us</h1>
        <div className="features">
          <FeatureBox
            icon={<MdDirectionsCar color="#4CAF50" size={60} />}
            title="Convenience"
            description="Golden Travel ensures a seamless connection between the airport and your destination with door-to-door service, eliminating the hassle of navigating public transport with luggage."
          />

          <FeatureBox
            icon={<MdAttachMoney color="#FF9800" size={60} />}
            title="Cost-Effective"
            description="With competitive pricing, choosing Golden Travel can be a budget-friendly option, especially when considering the value of time saved and the comfort provided."
          />

          <FeatureBox
            icon={<MdStars color="#3F51B5" size={60} />}
            title="Luxury Options"
            description="For those who prefer traveling in style, Golden Travel offers luxury vehicle options for a more comfortable and prestigious journey."
          />

          <FeatureBox
            icon={<MdSecurity color="#F44336" size={60} />}
            title="Peace of Mind"
            description="Booking with Golden Travel means you'll have a reliable service waiting for you, providing a stress-free start or end to your travel experience."
          />
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}

export default Transfers;
