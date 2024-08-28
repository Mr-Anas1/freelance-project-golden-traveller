import { useState, useEffect } from "react";

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
            Founded in February 2022, our agency, established in the name of
            Mrs. Eman Ali Al Sahaf, is dedicated to making your travel
            experience seamless and enjoyable. With branches in Khobar and
            Jubail, we strive to provide hassle-free solutions for all your
            travel needs.
          </p>
          <h4>What We Offer:</h4>
          <p>
            <ul>
              <li>
                <b>Hotel Bookings:</b> Handpicked accommodations to match your
                style and budget.
              </li>
              <li>
                <b>Custom Travel Packages:</b> Designed to suit both leisure and
                business travelers.
              </li>
              <li>
                <b>Comprehensive Travel Insurance:</b> Ensuring peace of mind
                every step of the way.
              </li>
              <li>
                <b>Visa Services:</b> For medical, tourism, and business travel,
                we provide them all.
              </li>
              <li>
                <b>International Driver License:</b> Get your international
                driving permit easily.
              </li>
              <li>
                <b>Passport Renewal:</b> Hassle-free renewal for your passport.
              </li>
              <li>
                <b>Flight Tickets:</b> Convenient booking for your next journey.
              </li>
            </ul>
          </p>
          <p style={{marginTop:"20px"}}>
            Under the leadership of our CEO, Mr. Shahnawaz Shaik, we offer a
            comprehensive range of services, including hotel bookings, tailored
            travel packages, insurance, and visa services for medical, tourism,
            and business purposes. Our mission is to ease your travels and
            ensure that every journey is a memorable one.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
