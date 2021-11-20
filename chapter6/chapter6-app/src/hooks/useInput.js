import React, {useState} from 'react';

export default function UseInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {value, onChange: e => setValue(e.target.value)},
    () => setValue(initialValue),
  ];
}