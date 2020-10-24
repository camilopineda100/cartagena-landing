import React from 'react';

import './Destinations.css';

function Destinations(){
  return(
    <div className="destinations">
      <h2 className="destinations-title">DESTINATIONS</h2>
      
      <p className="destinations-subtitle">Discover and share the most amazing destinations around the world</p>
      
      <div className="slider">
        <div className="slides-wrapper">
          <div className="slide" id="slide1">
            <img 
              className="slide-image"
              src={`${process.env.PUBLIC_URL}/images/destinations/destination1.jpg`} 
              alt="destination"
            />
          </div>

          <div className="slide" id="slide2">
            <img 
              className="slide-image"
              src={`${process.env.PUBLIC_URL}/images/destinations/destination2.jpg`} 
              alt="destination"
            />
          </div>

          <div className="slide" id="slide3">
            <img 
              className="slide-image"
              src={`${process.env.PUBLIC_URL}/images/destinations/destination3.jpg`} 
              alt="destination"
            />
          </div>
        </div>

        <div className="slides-buttons">
          <a className="slide-button" href="#slide1"></a>
          <a className="slide-button" href="#slide2"></a>
          <a className="slide-button" href="#slide3"></a>
        </div>
      </div>
    </div>
  )
}

export default Destinations