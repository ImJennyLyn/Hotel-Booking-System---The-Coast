import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import coverImage from './images/cover.png';

// Example images for each tab
import suiteImage from './images/suites.jpg';
import foodImage from './images/foods.jpg';
import natureImage from './images/nature.jpg';
import activityImage from './images/activities.jpg';

function App() {
  const carouselRef = useRef(null);
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

  // Function to render images based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Suites':
        return <img src={suiteImage} alt="Suites" className="tab-image" />;
      case 'Foods':
        return <img src={foodImage} alt="Foods" className="tab-image" />;
      case 'Nature':
        return <img src={natureImage} alt="Nature" className="tab-image" />;
      case 'Activities':
        return <img src={activityImage} alt="Activities" className="tab-image" />;
      default:
        return null;
    }
  };

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

      <div className="coast-content">
        <p>
          Welcome to The Coast Hotel – where comfort meets the sea breeze.
          Nestled along the serene shoreline, The Coast Hotel offers a relaxing
          escape with modern amenities and a touch of coastal charm. Whether
          you're planning a romantic getaway, a family vacation, or a quick
          business trip, our elegantly designed rooms and exceptional service
          promise a stay to remember. Enjoy beautiful ocean views, world-class
          dining, and the peaceful ambiance that only the coast can offer.
          Your perfect stay starts here.
        </p>
      </div>

      <div className="coast-services">
        <h2>What we Offer?</h2>
      </div>

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
<div className="coast-gallery">
<h2>A Glimpse of Coast</h2>

</div>
      <div >

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
      </div>
    </div>
  );
}

export default App;
