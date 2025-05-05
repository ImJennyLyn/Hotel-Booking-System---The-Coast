import React from 'react';
import './App.css';
import room1 from './images/room1.jpg';
import room2 from './images/room2.jpg';
import room3 from './images/room3.jpg';

function RoomPage() {
  const rooms = [
    {
      name: 'Deluxe Suite',
      description: 'Spacious room with ocean view, king-size bed, and luxury amenities.',
      price: '$180 / night',
      image: room1,
    },
    {
      name: 'Standard Room',
      description: 'Comfortable room with queen-size bed and modern facilities.',
      price: '$120 / night',
      image: room2,
    },
    {
      name: 'Family Room',
      description: 'Perfect for families, includes two double beds and extra space.',
      price: '$200 / night',
      image: room3,
    },
  ];

  return (
    <div className="room-page">
      <h1 className="room-title">Our Rooms</h1>
      <p className="room-intro">Choose from our beautifully designed rooms to make your stay unforgettable.</p>

      <div className="room-list">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.image} alt={room.name} className="room-image" />
            <div className="room-info">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <p className="room-price">{room.price}</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomPage;
