import React, {useState} from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
      <>
        <input type="checkbox"
               value={checked}
               onChange={() => setChecked(checked => !checked)}
        />
        {checked ? 'checked' : 'not checked'}
      </>
  );
};

export default Checkbox;