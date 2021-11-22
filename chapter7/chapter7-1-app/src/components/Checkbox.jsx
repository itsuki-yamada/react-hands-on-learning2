import React, {useEffect, useState} from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  }, [checked]);
  return (
      <>
        <input
            type="checkbox"
            value={checked}
            onChange={() => setChecked(checked => !checked)}
        />
      </>
  );
};

export default Checkbox;