import React from 'react'
import backgroundVideo from '../../hero-video.mp4'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <video autoPlay="autoplay" loop="loop" muted className="video">
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
    </div>
  ) 
}

export default Header