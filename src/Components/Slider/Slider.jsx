import React from 'react';
import { useState, useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Slide from './Slide/Slide';

import './Slider.css';

function Slider(props) {
  const { images } = props
  const [currentSlide, setCurrentSlide] = useState()
  const [slideRefs, setSlideRefs] = useState([])
  
  const observerOptions = {
    root: document.querySelector('.slides-wrapper'),
    threshold: 0.5
  }

  const handleObserverEvent = (observedEntries) => {
    observedEntries.forEach((entry) => {
      if(entry.isIntersecting) {
        setCurrentSlide(entry.target.id)
      }
    })
  }

  useIntersectionObserver(slideRefs, handleObserverEvent, observerOptions)

  useEffect(() => {
    setSlideRefs(document.querySelectorAll('.slide'))
  }, [setSlideRefs])

  return (
    <div className="slider">
        <div className="slides-wrapper">
          {images.map((image, index) => 
            <Slide
              key={index}
              id={`slide-${index}`}
              imageUrl={image}
            />
          )}
        </div>

        <div className="slides-buttons">
          {images.map((image, index) =>
            <span
              key={index} 
              className={`slide-button ${`slide-${index}` === currentSlide ? 'slide-button-active' : ''}`}
            />
          )}
        </div>
      </div>
  )
}

export default Slider;