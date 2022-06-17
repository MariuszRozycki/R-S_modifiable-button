import React from 'react';

function CardWrapper({ children }) {
  return (
    <div className='cardWrapper'>
      {children}
    </div>
  )
}

export default CardWrapper;