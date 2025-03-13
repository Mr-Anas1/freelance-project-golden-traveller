import { useState, useEffect } from "react";
import {
  MdHotel,
  MdFlight,
  MdSecurity,
  MdExplore,
  MdWork,
  MdDriveEta,
  MdAssignment,
} from "react-icons/md";
import FeatureBox from "../components/FeatureBox";

function AboutUs() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);
  }, []);

  return (
    <div id="about" className="about-us">
      <div className="about-title">
        <h1>About Us</h1>
        {/* <img
					src={image}
					alt="About Us"
					className="wavy"
				/> */}
      </div>
      <div className={`about-container ${isShown ? "show" : ""}`}>
        <div className="about-left">
          <img
            src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="about-right">
          <p className="about-para">
            Our agency, established in February 2022 under the name of our CEO,
            <span className="bold-txt"> Mrs. Eman Ali Al Sahaf</span> and led by{" "}
            <span className="bold-txt"> Mr. Shahnawaz Shaik</span>, with 12
            years of experience, is dedicated to making your travel experience
            seamless and enjoyable. With branches in{" "}
            <span className="bold-txt"> Al Khobar </span> and{" "}
            <span className="bold-txt"> Al Jubail</span>, we strive to provide
            hassle-free solutions for all your travel needs through a
            comprehensive range of services
          </p>
        </div>
      </div>

      <h2 style={{ textAlign: "center" }}>Why Choose Us?</h2>
      <div className="features">
        <FeatureBox
          icon={<MdHotel color="#3F51B5" size={60} />} // Blue for trust and reliability
          title="Hotel Bookings"
          description="Handpicked accommodations to match your style and budget."
        />

        <FeatureBox
          icon={<MdExplore color="#4CAF50" size={60} />} // Green for exploration and adventure
          title="Custom Travel Packages"
          description="Designed to suit both leisure and business travelers."
        />

        <FeatureBox
          icon={<MdSecurity color="#F44336" size={60} />} // Red for protection and peace of mind
          title="Trusted Travel Insurance"
          description="Ensuring peace of mind every step of the way."
        />

        <FeatureBox
          icon={<MdWork color="#FFC107" size={60} />} // Yellow for services like visas and business travel
          title="Visa Services"
          description="For medical, tourism, students, and business travel, we provide them all."
        />

        <FeatureBox
          icon={<MdDriveEta color="#009688" size={60} />} // Teal for mobility and driving
          title="International Driver License"
          description="Get your international driving permit easily."
        />

        <FeatureBox
          icon={<MdAssignment color="#673AB7" size={60} />} // Purple for documentation like passports
          title="Passport Renewal"
          description="Hassle-free renewal for your passport."
        />

        <FeatureBox
          icon={<MdFlight color="#FF5722" size={60} />} // Orange for flights and travel
          title="Flight Tickets"
          description="Convenient booking for your next journey."
        />
      </div>

      <p style={{ textAlign: "Center", marginBottom: "40px" }}>
        Our mission is to ease your travels and ensure that every journey is a
        memorable one.
      </p>
    </div>
  );
}

export default AboutUs;
