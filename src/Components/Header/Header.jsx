import React from 'react'
import { useState } from 'react'
import './Header.css'

function Header() {
  const [playingVideo, setPlaying] = useState(false)
  
  const handleOnCanPlay = (event) => {
    if(!playingVideo) {
      event.target.play()
      setPlaying(true)  
    }
  }

  return (
    <div className="header">
      <img 
        className="poster"
        src={`${process.env.PUBLIC_URL}/images/hero-poster.jpg`} 
        alt="hero poster"
        style={{
          opacity: playingVideo ? 0 : 1,
          transition: "opacity, 2s ease-in-out",
        }}
      />

      <video
        className="video" 
        loop muted
        onCanPlayThrough={handleOnCanPlay}
        style={{
          opacity: playingVideo ? 1 : 0,
          transition: "opacity, 2s ease-in-out",
        }}
      >
        <source src={`${process.env.PUBLIC_URL}/videos/hero-video.mp4`} type="video/mp4"/>
      </video>

      <div className="hero-content">
        <div className="content-text">
          <h1 className="hero-title">
            <span className="hero-title-span1">BY THE</span>
            <span className="hero-title-span2">AIR</span>
          </h1>
          
          <div className="hero-subtitle">
            <span>
              The world like never seen before
            </span>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Header