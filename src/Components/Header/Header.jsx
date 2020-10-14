import React from 'react'
import { useState } from 'react'
import './Header.css'

import heroVideo from '../../hero-video.mp4'
import heroPoster from '../../hero-poster.JPG'

function Header() {
  const [playing, setPlaying] = useState(false)
  
  const handleOnCanPlay = (event) => {
    if(!playing) {
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
      />
      <video
        className="video" 
        loop muted
        onCanPlayThrough={handleOnCanPlay}
        style={{
          opacity: playing ? 1 : 0,
          transition: "opacity, 2s ease-in-out",
        }}
      >
        <source src={heroVideo} type="video/mp4"/>
      </video>
    </div>
  ) 
}

export default Header