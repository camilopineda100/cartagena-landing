import React from 'react';
import Destinations from './Destinations/Destinations';
import Journey from './Journey/Journey';

import "./Body.css";

function Body() {
  return(
    <div className='body'>
      <Destinations />
      <Journey />
    </div>
  )
}

export default Body