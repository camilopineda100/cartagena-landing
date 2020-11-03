import React from 'react';
import Slider from '../../Slider/Slider';

import './Destinations.css';

function Destinations(){
  return(
    <div className="destinations">
      <h2 className="destinations-title">DESTINATIONS</h2>
      
      <p className="destinations-subtitle">Discover and share the most amazing destinations around the world</p>
      
      <Slider
        images={[
          `${process.env.PUBLIC_URL}/images/destinations/destination1.jpg`,
          `${process.env.PUBLIC_URL}/images/destinations/destination2.jpg`,
          `${process.env.PUBLIC_URL}/images/destinations/destination3.jpg`
        ]}
      />
    </div>
  )
}

export default Destinations