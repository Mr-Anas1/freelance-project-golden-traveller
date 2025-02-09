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
  { icon: <FaPlane size={50} />, text: "Flight Tickets", link: "/flight" },
  { icon: <FaHotel size={50} />, text: "Hotel Bookings", link: "/hotel" },
  { icon: <FaPassport size={50} />, text: "Visa Services", link: "/visa" },
  {
    icon: <FaShieldAlt size={50} />,
    text: "Trusted Travel Insurance",
    link: "/insurance",
  },
  {
    icon: <FaIdCard size={50} />,
    text: "International Driver License",
    link: "/license",
  },
  { icon: <FaPassport size={50} />, text: "Passport Renewal", link: "renewal" },
  {
    icon: <FaBusinessTime size={50} />,
    text: "Corporate travel solutions",
    link: "/corporate",
  },
  {
    icon: <FaExchangeAlt size={50} />,
    text: "Transfers",
    link: "/transfer",
  },
  {
    icon: <FaHouseUser size={50} />,
    text: "Housemaid contract",
    link: "/housemaid",
  },
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
      <div style={styles.container}>
        {services.map((service, index) => (
          <div
            key={index}
            style={styles.serviceItem}
            onClick={() => handleServiceClick(service.link)}
          >
            {service.icon}
            <p style={styles.text}>{service.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "20px",
  },
  serviceItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    textAlign: "center",
    flex: "1 1 150px", // Allows for responsiveness
    maxWidth: "200px",
    cursor: "pointer",
  },
  text: {
    marginTop: "10px",
    fontSize: "16px",
  },
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column",
    },
    serviceItem: {
      flex: "1 1 100%", // Full width on smaller screens
      maxWidth: "100%",
    },
  },
};

export default Services;
