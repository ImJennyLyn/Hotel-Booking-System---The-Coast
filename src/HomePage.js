import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { useLocation, useNavigate } from 'react-router-dom'; // Add these imports if needed

import coverImage from './images/cover.png';

// Images for Tabs
import suiteImage1 from './images/suites1.jpg';
import suiteImage2 from './images/suites2.jpg';
import suiteImage3 from './images/suites3.jpg';

import foodImage1 from './images/foods1.jpg';
import foodImage2 from './images/foods2.jpg';
import foodImage3 from './images/foods3.jpg';

import natureImage1 from './images/nature1.jpg';
import natureImage2 from './images/nature2.jpg';
import natureImage3 from './images/nature3.jpg';

import activityImage1 from './images/activities1.jpg';
import activityImage2 from './images/activities2.jpg';
import activityImage3 from './images/activities3.jpg';

function HomePage() {
  const carouselRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeTab, setActiveTab] = useState('Suites');

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 250;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Mouse and Touch Handlers for Carousel
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsMouseDown(false);
  const handleMouseUp = () => setIsMouseDown(false);
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    setIsMouseDown(true);
    setStartX(touchStart - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchEnd = () => setIsMouseDown(false);
  const handleTouchMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const touchMove = e.touches[0].clientX;
    const walk = (touchMove - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Tab Content Renderer
  const renderTabContent = () => {
    let images = [];
    switch (activeTab) {
      case 'Suites':
        images = [suiteImage1, suiteImage2, suiteImage3];
        break;
      case 'Foods':
        images = [foodImage1, foodImage2, foodImage3];
        break;
      case 'Nature':
        images = [natureImage1, natureImage2, natureImage3];
        break;
      case 'Activities':
        images = [activityImage1, activityImage2, activityImage3];
        break;
      default:
        images = [];
    }
    return (
      <div className="tab-images">
        {images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`${activeTab} ${index + 1}`} className="tab-image" />
        ))}
      </div>
    );
  };

  // Scroll to sections
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <img src={coverImage} alt="Hotel Cover" className="cover-image" />
        <div className="overlay-text">The Coast Hotel</div>
      </section>

      {/* Welcome Text */}
      <section className="coast-content">
        <p>
          Welcome to The Coast Hotel – where comfort meets the sea breeze.
          Nestled along the serene shoreline, The Coast Hotel offers a relaxing
          escape with modern amenities and a touch of coastal charm. Whether
          you're planning a romantic getaway, a family vacation, or a business trip,
          our elegant rooms and exceptional service promise a memorable stay.
        </p>
      </section>

      {/* Services Section */}
      <section ref={servicesRef}>
        <h2 className="coast-services">What We Offer</h2>
        <div
          ref={carouselRef}
          className="carousel-container"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div className="carousel">
            <div className="carousel-box">Deluxe Room</div>
            <div className="carousel-box">Ocean View</div>
            <div className="carousel-box">Spa & Wellness</div>
            <div className="carousel-box">Fine Dining</div>
            <div className="carousel-box">Conference Room</div>
            <div className="carousel-box">Beach Access</div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef}>
        <h2 className="coast-gallery">A Glimpse of Coast</h2>
        {/* Tab Bar */}
        <div className="tab-bar">
          {['Suites', 'Foods', 'Nature', 'Activities'].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </section>
{/* contact section */}
      <section ref={contactRef} className="coast-contact">
  <h2>Contact Us</h2>
  <p><i className="fas fa-envelope"></i> info@thecoasthotel.com</p>
  <p><i className="fas fa-phone-alt"></i> +1 234 567 8900</p>
  <p><i className="fas fa-map-marker-alt"></i> 123 Beachfront Avenue, Seaside City</p>
</section>

    </div>
  );
}

export default HomePage;
