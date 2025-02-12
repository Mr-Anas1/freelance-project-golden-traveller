import { useState } from "react";
import {
  FaHotel,
  FaPassport,
  FaPlane,
  FaShieldAlt,
  FaIdCard,
  FaBusinessTime,
  FaHouseUser,
  FaExchangeAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  { icon: FaPlane, text: "Flight Tickets", link: "/flight" },
  { icon: FaHotel, text: "Hotel Bookings", link: "/hotel" },
  { icon: FaPassport, text: "Visa Services", link: "/visa" },
  { icon: FaShieldAlt, text: "Trusted Travel Insurance", link: "/insurance" },
  { icon: FaIdCard, text: "International Driver License", link: "/license" },
  { icon: FaPassport, text: "Passport Renewal", link: "/passport" },
  {
    icon: FaBusinessTime,
    text: "Corporate travel solutions",
    link: "/corporate",
  },
  { icon: FaExchangeAlt, text: "Transfers", link: "/transfers" },
  { icon: FaHouseUser, text: "Housemaid contract", link: "/housemaid" },
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (link) => {
    navigate(link);
  };

  return (
    <>
      <center>
        <h1 style={{ margin: "40px" }}>Our Services</h1>
      </center>
      <div style={styles.container} className="service-container">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            service={service}
            onClick={handleServiceClick}
          />
        ))}
      </div>
    </>
  );
};

const ServiceItem = ({ service, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.serviceItem,
        color: isHovered ? "#ffc000" : "black",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(service.link)}
    >
      <service.icon
        size={50}
        style={{ color: isHovered ? "#ffc000" : "black" }}
      />
      <p style={{ ...styles.text, color: isHovered ? "#ffc000" : "black" }}>
        {service.text}
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "0px 120px",
  },
  serviceItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    textAlign: "center",
    flex: "1 1 150px",
    maxWidth: "200px",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  text: {
    marginTop: "10px",
    fontSize: "16px",
  },
};

export default Services;
