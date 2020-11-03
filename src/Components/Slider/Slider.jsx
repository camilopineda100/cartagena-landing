import React from 'react';
import { useState, useEffect } from 'react';
import Slide from './Slide/Slide';

import './Slider.css';

function Slider(props) {
  const { images } = props
  const [currentSlide, setCurrentSlide] = useState(1)

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

  return (
    <div className="slider">
        <div className="slides-wrapper">
          {images.map((image, index) => 
            <Slide
              id={`slide-${index}`}
              imageUrl={image}
            />
          )}
        </div>

        <div className="slides-buttons">
          {images.map((image, index) =>
            <span 
              className={`slide-button ${`slide-${index}` === currentSlide ? 'slide-button-active' : ''}`}
            />
          )}
        </div>
      </div>
  )
}

export default Slider;