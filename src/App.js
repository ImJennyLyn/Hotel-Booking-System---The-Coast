import React from 'react';
import './App.css';
import './script.js'; // If you want JS behaviors
import coverImage from './images/cover.png'; // Replace this with your actual image

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-left">
          <li>Home</li>
          <li>Rooms</li>
          <li>Book Now</li>
        </ul>
        <div className="nav-center">The Coast</div>
        <ul className="nav-right">
          <li>Services</li>
          <li>Gallery</li>
          <li>Contacts</li>
        </ul>
      </nav>

      <section className="hero">
        <img src={coverImage} alt="Hotel Cover" className="cover-image" />
        <div className="overlay-text">The Coast Hotel</div>
      </section>

      {/* Add other page sections here */}
    </div>
  );
}

export default App;
