import React, {createContext, useContext, useState} from 'react';
import colorData from '../data/color-data.json';
import {v4 as uuid} from 'uuid';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({children}) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) => {
    setColors(prev => ([
      ...prev,
      {
        id: uuid(),
        rating: 0,
        title,
        color,
      },
    ]));
  };

  const rateColor = (id, rating) => {
    setColors(prev => (
        prev.map(color => (color.id === id ? {...color, rating} : color))
    ));
  };

  const removeColor = id => setColors(
      prev => prev.filter(color => color.id !== id),
  );

  return (
      <ColorContext.Provider
          value={{colors, addColor, rateColor, removeColor}}
      >
        {children}
      </ColorContext.Provider>
  );
}