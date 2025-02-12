import React from "react";
import business_man from "../images/business-man.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { MdPerson, MdAttachMoney, MdSecurity, MdDevices } from "react-icons/md";
import FeatureBox from "../components/FeatureBox";
import BookMeetingForm from "../components/BookMeetingForm";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";
import { useEffect } from "react";

function Corporate() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className="corporate">
      <div className="corporate-container">
        <div className="corporate-introBox">
          <div className="corporate-introBox-content">
            <div className="corporate-introBox-hashtag">
              <p>#No 1</p>
            </div>
            <div className="corporate-introBox-title">
              Corporate Travel Services For Business
            </div>
          </div>

          <div className="corporate-introBox-img">
            <img src={business_man} alt="business-man" />
          </div>
        </div>

        <div className="corporate-main-content">
          <p>
            Are you looking for a reliable and affordable corporate travel
            service for your business? If so, you've come to the right place. We
            are a leading travel agency in eastern province saudi arabia that
            connects you with the best travel providers in the industry. Whether
            you need to book flights, hotels, car rentals, or tours, we can help
            you find the best deals and options for your needs.{" "}
          </p>

          <br />

          <p>
            We are more than just a travel agency. We are your trusted partner
            for corporate travel. We have a team of experts who are ready to
            assist you 24/7 with any questions or issues you may have. We also
            have a flexible cancellation policy and a secure payment system.
            With us, you can travel with confidence and peace of mind.
          </p>

          <br />
        </div>

        <div className="corporate-offer-box">
          <h1>What Do We Offer?</h1>
          <ul className="offer-list">
            <li>
              <FaCheckCircle className="tick-icon" /> Booking Flights, Hotels,
              Car Rentals for Cash and Credit Basis
            </li>
            <li>
              <FaCheckCircle className="tick-icon" /> Managing Your Travel
              Budget and Expenses
            </li>
            <li>
              <FaCheckCircle className="tick-icon" /> Creating Customized
              Itineraries and Travel Plans
            </li>
            <li>
              <FaCheckCircle className="tick-icon" /> Offering Access to
              Exclusive Deals and Discounts
            </li>
            <li>
              <FaCheckCircle className="tick-icon" /> Providing 24/7 Customer
              Service and Support
            </li>
          </ul>
        </div>

        <div className="feature-box">
          <h1>Why You Should Choose Golden Traveler?</h1>
          <div className="features">
            <FeatureBox
              icon={<MdPerson color="#ff9800" size={60} />}
              title="Personalized Service"
              description="A dedicated travel consultant will tailor your itinerary based on your preferences, budget, and goals. Contact them anytime, anywhere, for assistance."
            />

            <FeatureBox
              icon={<MdAttachMoney color="#4caf50" size={60} />}
              title="Cost Savings"
              description="We negotiate the best rates and discounts through our supplier network. Flexible payment options and transparent billing help manage expenses."
            />

            <FeatureBox
              icon={<MdSecurity color="#2196f3" size={60} />}
              title="Travel Safety"
              description="Stay informed with travel alerts, real-time monitoring, and 24/7 support for any disruptions, emergencies, or assistance needs."
            />

            <FeatureBox
              icon={<MdDevices color="#673ab7" size={60} />}
              title="Travel Technology"
              description="Easily book, modify, and manage your reservations with our tech-driven solutions. Access travel documents, reports, and savings tracking digitally."
            />
          </div>
        </div>

        <BookMeetingForm />
      </div>
    </div>
  );
}

export default Corporate;
