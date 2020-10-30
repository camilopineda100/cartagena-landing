import React from 'react';
import { useEffect, useState } from 'react';

import './Destinations.css';

function Destinations(){
  const [currentSlide, setCurrentSlide] = useState('slide1')

  const observerOptions = {
    root: document.querySelector('.slides-wrapper'),
    threshold: 0.5
  }

  useEffect(() => {
    const observer = new IntersectionObserver((observedEntries, observer) => {
      observedEntries.forEach( entry => {
        if(entry.isIntersecting) {
          setCurrentSlide(entry.target.id)
        }
      })
    }, observerOptions)

    const slides = document.querySelectorAll('.slide')

    slides.forEach((slide) => {
      observer.observe(slide)
    })
  })

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
          <span 
            className={`slide-button ${currentSlide === 'slide1' ? 'slide-button-active' : ''}`}
          />

          <span 
            className={`slide-button ${currentSlide === 'slide2' ? 'slide-button-active' : ''}`}
          />

          <span 
            className={`slide-button ${currentSlide === 'slide3' ? 'slide-button-active' : ''}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Destinations