import React, { useState } from 'react';
import './BookNowPage.css';
import Swal from 'sweetalert2';


function BookNowPage() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('Standard');
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const bookingData = {
      fullName,
      address,
      email,
      phone,
      roomType,
      checkInDate,
      checkOutDate,
      guests
    };
  
    fetch('http://localhost/booking-hotel-website/src/book_now.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          Swal.fire({
            icon: 'success',
            title: 'Booking Confirmed!',
            text: 'Your reservation has been successfully submitted.',
            confirmButtonText: 'OK'
          }).then(() => {
            window.location.reload(); // Reload after modal confirmation
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Booking Failed',
            text: data.message || 'Something went wrong. Please try again.'
          });
        }
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Booking failed: ' + err.message
        });
      });
  };
  

  return (
    <div className="booking-container">
      <h1>Book Your Stay</h1>
      <p>Please enter your information to reserve a room.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="roomType">Room Type</label>
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          >
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="Family">Family</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="check-in">Check-in Date</label>
          <input
            type="date"
            id="check-in"
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
