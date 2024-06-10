import React from 'react';
import image from '../images/image-removebg-preview.png';
import logo1 from '../images/logo1.jpg';
import logo2 from '../images/logo2.jpg';
import logo3 from '../images/logo3.jpg';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.jpg';

function Customers() {
	const logos = [logo1, logo2, logo3, logo4, logo5];
	return (
		<>
			<div
				id="customer"
				className="customer-container"
			>
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
