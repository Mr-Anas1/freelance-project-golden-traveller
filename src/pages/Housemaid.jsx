import React from "react";
import BookingCTA from "../components/BookingCTA";
import FeatureBox from "../components/FeatureBox";
import { MdGavel, MdTune, MdWork, MdChecklist } from "react-icons/md";

function Housemaid() {
  const openWhatsapp = () => {
    window.location.href = "https://wa.me/+966";
  };

  return (
    <div className="housemaid">
      <div className="housemaid-container">
        <h1>Secure and Clear Housemaid Agreements</h1>

        <div className="features">
          <FeatureBox
            icon={<MdGavel color="#ff9800" size={60} />}
            title="Clear Agreements"
            description="Ensure a well-defined and straightforward contract for your housemaid."
          />

          <FeatureBox
            icon={<MdTune color="#4caf50" size={60} />}
            title="Tailored Terms"
            description="Receive customized terms that fit your specific needs."
          />

          <FeatureBox
            icon={<MdWork color="#2196f3" size={60} />}
            title="Professional Service"
            description="Benefit from expertly crafted contracts for a smooth employment relationship."
          />
        </div>

        <div className="requirements">
          <h2>Requirements</h2>
          <ul className="requirements-list">
            <li>
              <MdChecklist size={24} color="#673ab7" /> Passport Copy
            </li>
            <li>
              <MdChecklist size={24} color="#673ab7" /> Iqama Copy
            </li>
            <li>
              <MdChecklist size={24} color="#673ab7" /> Exit/Re-Entry Visa
            </li>
            <li>
              <MdChecklist size={24} color="#673ab7" /> Flight Tickets
            </li>
            <li>
              <MdChecklist size={24} color="#673ab7" /> Sponsor ID Copy
            </li>
            <li>
              <MdChecklist size={24} color="#673ab7" /> National Address
            </li>
            <li>
              <MdChecklist size={24} color="#673ab7" /> Email Address
            </li>
            <li>
              <MdChecklist size={24} color="#673ab7" /> Sponsor and Housemaid
              Contact Numbers
            </li>
          </ul>
        </div>
        <div class="visa-requirements-cta">
          <button onClick={openWhatsapp}>Contact</button>
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}

export default Housemaid;
