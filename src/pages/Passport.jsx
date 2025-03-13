import React from "react";
import BookingCTA from "../components/BookingCTA";
import FeatureBox from "../components/FeatureBox";
import {
  MdSecurity,
  MdHealthAndSafety,
  MdTune,
  MdVerified,
  MdHeadsetMic,
} from "react-icons/md";
import { useEffect } from "react";

function Passport() {
  const openWhatsapp = () => {
    window.location.href = "https://wa.me/+966559874003 ";
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className="passport">
      <div className="passport-container">
        <h1>Our Passport Renewal Made Simple and Fast</h1>

        <div className="features">
          <FeatureBox
            icon={<MdSecurity color="#ff9800" size={60} />}
            title="Protect Your Journey with Confidence"
            description="Travel with peace of mind, knowing you're covered by the most trusted names in insurance."
          />

          <FeatureBox
            icon={<MdHealthAndSafety color="#4caf50" size={60} />}
            title="Comprehensive Coverage"
            description="From trip cancellations to medical emergencies, our travel insurance options ensure you’re prepared for the unexpected."
          />

          <FeatureBox
            icon={<MdTune color="#2196f3" size={60} />}
            title="Tailored Protection"
            description="Choose the level of coverage that fits your travel plans, whether it's a short getaway or a long adventure."
          />

          <FeatureBox
            icon={<MdVerified color="#e91e63" size={60} />}
            title="Top Insurance Providers"
            description="We partner with industry-leading insurance companies to bring you the best coverage available."
          />

          <FeatureBox
            icon={<MdHeadsetMic color="#673ab7" size={60} />}
            title="24/7 Support"
            description="Need help or have questions about your policy? Our team is always available to assist you."
          />
        </div>
        <div class="visa-requirements-cta">
          <button onClick={openWhatsapp}>Contact</button>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}

export default Passport;
