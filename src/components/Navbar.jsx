import React, { useState, useEffect, useRef } from "react";
import logo from "../images/golden traveler agency.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScrollRef.current) {
        // Scrolling down
        setIsScrolled(true);
      } else {
        // Scrolling up
        setIsScrolled(false);
      }

      prevScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <nav
      id="navbar"
      className={`navbar ${isOpen ? "open" : ""} ${isScrolled ? "hide" : ""}`}
    >
      <div className="navbar-logo">
        <img src={logo} alt="" onClick={reloadPage} />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/#about" onClick={closeMenu}>
            About us
          </a>
        </li>
        <li>
          <a href="/#customer" onClick={closeMenu}>
            Our Customers
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={closeMenu}>
            Contact us
          </a>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
