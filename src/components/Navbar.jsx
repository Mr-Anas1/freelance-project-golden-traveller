// src/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={`navbar ${isOpen ? 'open' : ''}`}>
			<div className="navbar-logo">MyLogo</div>
			<ul className="navbar-links">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About us</a>
				</li>
				<li>
					<a href="#our-customers">Our Customers</a>
				</li>
				<li>
					<a href="#contact">Contact us</a>
				</li>
				
				
			</ul>
			<div
				className="navbar-toggle"
				onClick={handleToggle}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
		</nav>
	);
};

export default Navbar;
