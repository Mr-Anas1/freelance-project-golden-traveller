// ContactDetails.js

function ContactDetails() {
	return (
		<div className="contact-details">
			<div className="contact-item">
				<i className="fas fa-map-marker-alt contact-icon"></i>
				<span>Al Rakha, Al-Khobar, <br />Old Unified Visa Application Center,<br /> Al Katheery Center</span>
			</div>
			<div className="contact-item">
				<i className="fas fa-phone contact-icon"></i>
				<p>0501426027 </p>
				<p>0559874003</p>
				<p>0530833699 </p>
				<p>0501472031</p>
				<p>0565620721</p>
			</div>
			<div className="contact-item">
				<i className="fas fa-envelope contact-icon"></i>
				<p>For visa enquiries: visa@g-travel.com.sa</p>
				<p>For bookings: bookings@g-travel.com.sa</p>
			</div>
		</div>
	);
}

export default ContactDetails;
