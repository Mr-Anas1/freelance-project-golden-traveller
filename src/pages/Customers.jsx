import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.jpg";
import logo6 from "../images/logo 6.jpeg";
import logo7 from "../images/logo 7.jpeg";
import logo8 from "../images/logo 8.jpeg";
import logo9 from "../images/logo 9.jpeg";
import logo10 from "../images/logo 10.jpeg";
import logo11 from "../images/logo 11.jpeg";
import logo12 from "../images/logo 12.jpeg";
import logo13 from "../images/logo 13.jpeg";
import diesel from "../images/diesel.png";
import ports from "../images/ports.png";
import zamil from "../images/zamil.png";

function Customers() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    ports,
    logo11,
    zamil,
    diesel,
  ];
  return (
    <>
      <div id="customer" className="customer-container">
        <div className="about-title">
          <h1>Our Customers</h1>
          {/* <img
						src={image}
						alt="About Us"
						className="wavy"
					/> */}
        </div>
        <div className="customers">
          <div className="logo-container">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Customer ${index + 1}`}
                className="customer-logo"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
