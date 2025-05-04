import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';  // Import Navbar
import HomePage from './HomePage';  // Import HomePage
import RoomPage from './RoomPage';  // Import RoomPage
import BookNowPage from './BookNowPage';  // Import BookNowPage

function App() {
  return (
    <Router>
      <Navbar /> {/* This is where your Navbar is included */}
      <Routes>
        {/* Define the Routes for different pages */}
        <Route path="/" element={<HomePage />} />   {/* Home page route */}
        <Route path="/rooms" element={<RoomPage />} />  {/* Room page route */}
        <Route path="/book" element={<BookNowPage />} />  {/* Book now page route */}
      </Routes>
    </Router>
  );
}

export default App;
