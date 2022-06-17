import React from 'react';

import img from './Images/pizza.jpg';

function Image() {
  return (
    <div>
      <img className='imgPizza' src={img} alt="Pizza" />
    </div>
  )
}

export default Image;