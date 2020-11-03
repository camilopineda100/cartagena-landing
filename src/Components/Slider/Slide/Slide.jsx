import React from 'react';

import './Slide.css'

function Slide(props) {
  const { id, imageUrl } =  props

  return (
    <div className="slide" id={id}>
      <img 
        className="slide-image"
        src={imageUrl} 
        alt="Slide"
      />
    </div>
  )
}

export default Slide;
