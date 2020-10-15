import React from 'react'
import { useState } from 'react'
import heroVideo from '../../hero-video.mp4'
import heroPoster from '../../hero-poster.JPG'
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
        src={heroPoster} 
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
        <source src={heroVideo} type="video/mp4"/>
      </video>

      <div className="hero-content">
        <h1 className="hero-title">
          <span>POR LOS</span>
          <span>AIRES</span>
        </h1>
      </div>
    </div>
  ) 
}

export default Header