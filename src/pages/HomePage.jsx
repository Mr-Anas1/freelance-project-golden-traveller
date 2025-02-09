import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutUS from "./AboutUs";
import Contact from "./Contact";
import Customers from "./Customers";
import Footer from "../components/Footer";
import Services from "./Services";

const Home = () => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsShown(true);
  }, []);

  const handleSelectChange = (event) => {
    const selectedCountry = event.target.value;
    if (selectedCountry) {
      navigate(`/visa-requirements/${selectedCountry}`);
    }
  };

  return (
    <>
      <div id="home" className={`home-container ${isShown ? "show" : ""}`}>
        <div className="home-left">
          <h1>
            Book with us and enjoy your{" "}
            <span className="highlight">Journey!</span>
          </h1>
          <p>
            Our team is always ready to give you the best travel memories in
            your life.
          </p>
        </div>
        <div className="home-right">
          <img
            src="https://img.freepik.com/free-photo/portrait-woman-visiting-luxurious-city-dubai_23-2151328516.jpg"
            alt=""
          />
        </div>
      </div>
      <Services />
      <AboutUS />
      <Customers />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
