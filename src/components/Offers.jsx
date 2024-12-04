import React from 'react';
import './Offers.css';

const Offers = () => {
  return (
    <div className="offers-container offers">
      <h1 className="offers-heading">Offers</h1>
      <nav className="offers-navbar">
        <a href="#hotels" className="active">Hotels</a>
        <a href="#flights">Flights</a>
        <a href="#holidays">Holidays</a>
        <a href="#trains">Trains</a>
        <a href="#cabs">Cabs</a>
        <a href="#bank-offers">Bank Offers</a>
      </nav>
      <div className="offers-grid">
        <div className="offer-card">
          <h2>FOR YOUR YEAR-END TRIPS:</h2>
          <p>Grab Up to 45% OFF* on Hotels & Homestays in India.</p>
          <button>Book Now</button>
        </div>
        <div className="offer-card">
          <h2>Up to 25% OFF*</h2>
          <p>on International Hotels and Holiday Packages.</p>
          <button>Book Now</button>
        </div>
        <div className="offer-card">
          <h2>BANGALORE HOTELS:</h2>
          <p>Grab Up to 30% OFF*</p>
          <button>Book Now</button>
        </div>
        <div className="offer-card">
          <h2>FOR YOUR YEAR-END TRIPS:</h2>
          <p>Grab Up to 35% OFF* on International Hotels.</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;