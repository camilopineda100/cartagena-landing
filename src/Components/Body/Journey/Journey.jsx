import React from 'react';

import './Journey.css';

function Journey() {
  return(
    <div className="journey">
       <h2 className="journey-title">TELL YOUR JOURNEY</h2>
       
       <p className="journey-subtitle">A new journey, a new destiny</p>
       
       <div className="journey-main">
        <video
          className="journey-video"
          autoPlay
          loop muted
        >
          <source src={`${process.env.PUBLIC_URL}/videos/journey.mp4`} type="video/mp4"/>
        </video>
       </div>
    </div>
  )
}

export default Journey