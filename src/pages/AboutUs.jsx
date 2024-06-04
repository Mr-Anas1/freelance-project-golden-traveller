import React from 'react';
import image from '../images/image-removebg-preview.png';

import { useState, useEffect } from 'react';

function AboutUs() {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		setIsShown(true);
	}, []);

	return (
		<div
			id="about"
			className="about-us"
		>
			<div className="about-title">
				<h1>About Us</h1>
				<img
					src={image}
					alt="About Us"
					className="wavy"
				/>
			</div>
			<div className={`about-container ${isShown ? 'show' : ''}`}>
				<div className="about-left">
					<img
						src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</div>
				<div className="about-right">
					<h1>
						<div className="subtitle">
							"LIFE IS SHORT AND THE WORLD IS WIDE"
						</div>
					</h1>
					<p className="about-para">
						We are a one-stop solution for all your travel needs, from planning
						your dream vacation to navigating the complexities of international
						travel. We offer a comprehensive range of services, including visa
						assistance, tourism packages, educational and medical consultancy
						, travel insurance, international driving licenses,
						hotel bookings, flight and travel ticketing, passport and photo
						services, travel vehicle rentals, and translation services. Whether
						you're a seasoned traveler or embarking on your first adventure
						abroad, we're here to help you make the most of your journey.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
