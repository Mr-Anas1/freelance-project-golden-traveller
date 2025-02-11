import React from "react";
import FeatureBox from "../components/FeatureBox";
import BookingCTA from "../components/BookingCTA";
import {
  MdSecurity,
  MdHealthAndSafety,
  MdTune,
  MdVerified,
  MdHeadsetMic,
} from "react-icons/md";

function Insurance() {
  return (
    <div className="insurance">
      <div className="insurance-content">
        <h1>Trusted Travel Insurance</h1>

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
      </div>

      <BookingCTA />
    </div>
  );
}

export default Insurance;
