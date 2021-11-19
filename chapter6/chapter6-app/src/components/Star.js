import React from 'react';
import {FaStar} from 'react-icons/all';

const Star = ({selected = false}) => {
  return (
      <FaStar color={selected ? 'red' : 'grey'}/>
  );
};

export default Star;