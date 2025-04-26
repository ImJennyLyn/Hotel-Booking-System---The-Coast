import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import coverImage from './images/cover.png';

function App() {
  const carouselRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto slide configuration
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Auto scroll to next box
        carouselRef.current.scrollLeft += 250; // Scroll by 250px
      }
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle mouse down (start dragging)
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  // Handle mouse leave (end dragging)
  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  // Handle mouse up (end dragging)
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  // Handle mouse move (dragging)
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    setIsMouseDown(true);
    setStartX(touchStart - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsMouseDown(false);
  };

  const handleTouchMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const touchMove = e.touches[0].clientX;
    const walk = (touchMove - startX) * 2; // Adjust the scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
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
        Welcome to The Coast Hotel – where comfort meets the sea breeze.  Nestled along the serene shoreline, The Coast Hotel offers a relaxing escape with modern amenities and a touch of coastal charm. Whether you're planning a romantic getaway, a family vacation, or a quick business trip, our elegantly designed rooms and exceptional service promise a stay to remember.  Enjoy beautiful ocean views, world-class dining, and the peaceful ambiance that only the coast can offer. Your perfect stay starts here.        </p>
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
    </div>
  );
}

export default App;
