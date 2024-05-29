import React from 'react';
import image from '../images/image-removebg-preview.png';

import { useState, useEffect } from 'react';

function AboutUs() {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		setIsShown(true);
	}, []);

	return (
		<div className="about-us">
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
					<p className='about-para'>
						Our team is always ready to give you the best travel memories in
						your life. Our team is always ready to give you the best travel
						memories in your life. Our team is always ready to give you the best
						travel memories in your life.
						memories in your life. Our team is always ready to give you the best
						travel memories in your life.
						memories in your life. Our team is always ready to give you the best
						travel memories in your life.
						memories in your life. Our team is always ready to give you the best
						travel memories in your life.
						memories in your life. 
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
