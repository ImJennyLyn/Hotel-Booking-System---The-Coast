import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './HomePage';
import RoomsPage from './RoomsPage';
import BookNowPage from './BookNowPage';
import Navbar from './NavBar';

function App() {
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Navbar
        scrollToSection={scrollToSection}
        servicesRef={servicesRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
      <Routes>
        <Route path="/" element={
          <HomePage
            servicesRef={servicesRef}
            galleryRef={galleryRef}
            contactRef={contactRef}
          />
        } />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/book" element={<BookNowPage />} />
      </Routes>
    </Router>
  );
}

export default App;
