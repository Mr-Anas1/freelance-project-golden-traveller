import { FaHotel, FaPassport, FaPlane, FaShieldAlt, FaIdCard } from 'react-icons/fa';

const services = [
  { icon: <FaHotel size={50} />, text: 'Hotel Bookings' },
  { icon: <FaPassport size={50} />, text: 'Visa Services' },
  { icon: <FaShieldAlt size={50} />, text: 'Comprehensive Travel Insurance' },
  { icon: <FaIdCard size={50} />, text: 'International Driver License' },
  { icon: <FaPassport size={50} />, text: 'Passport Renewal' },
  { icon: <FaPlane size={50} />, text: 'Flight Tickets' },
];

const Services = () => {
  return (
    <>
      <center><h1 style={{margin:"40px"}}>Our Services</h1></center>
      <div style={styles.container}>
      {services.map((service, index) => (
        <div key={index} style={styles.serviceItem}>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '20px',
  },
  serviceItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    textAlign: 'center',
    flex: '1 1 150px', // Allows for responsiveness
    maxWidth: '200px',
  },
  text: {
    marginTop: '10px',
    fontSize: '16px',
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
    },
    serviceItem: {
      flex: '1 1 100%', // Full width on smaller screens
      maxWidth: '100%',
    },
  },
};

export default Services;
