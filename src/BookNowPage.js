import React, { useState } from 'react';
import './BookNowPage.css';  // Import the CSS file

function BookNowPage() {
  const [hotel, setHotel] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Details:
      Hotel: ${hotel}
      Check-in Date: ${checkInDate}
      Check-out Date: ${checkOutDate}
      Number of Guests: ${guests}`);
  };

  return (
    <div className="booking-container">
      <h1>Book Your Stay</h1>
      <p>Choose a hotel, select your dates, and reserve your stay with us!</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="hotel">Hotel</label>
          <input
            type="text"
            id="hotel"
            name="hotel"
            value={hotel}
            onChange={(e) => setHotel(e.target.value)}
            placeholder="Enter hotel name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="check-in">Check-in Date</label>
          <input
            type="date"
            id="check-in"
            name="check-in"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="check-out">Check-out Date</label>
          <input
            type="date"
            id="check-out"
            name="check-out"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            max="10"
            required
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type="submit">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
}

export default BookNowPage;
