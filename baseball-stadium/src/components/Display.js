/*
  - display the count of `balls` and `strikes` for the at-bat.
  - should be updated when the user records activity on the `Dashboard` component.
*/
import React from 'react';

const Display = ({ strikes, balls, foul }) => {
  return (
    <div className='display'>
      <h2>Strikes: {strikes}</h2>
      <h2>balls: {balls}</h2>
      <h2>foul: {foul}</h2>
    </div>
  )
}

export default Display;