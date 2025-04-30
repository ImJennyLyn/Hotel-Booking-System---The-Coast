// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToSection, servicesRef, galleryRef, contactRef }) => {
  return (
    <nav className="navbar">
      <ul className="nav-left">
        <Link to="/" className="tab-button">Home</Link>
        <Link to="/RoomsPage" className="tab-button">Rooms</Link>
        <Link to="/BookNowPage" className="tab-button">Book Now</Link>
      </ul>
      <div className="nav-center">The Coast</div>
      <ul className="nav-right">
        <li onClick={() => scrollToSection?.(servicesRef)}>Services</li>
        <li onClick={() => scrollToSection?.(galleryRef)}>Gallery</li>
        <li onClick={() => scrollToSection?.(contactRef)}>Contacts</li>
      </ul>
    </nav>
  );
};

export default Navbar;
