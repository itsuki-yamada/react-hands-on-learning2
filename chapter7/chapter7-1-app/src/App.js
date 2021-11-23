import Checkbox from './components/Checkbox';
import {useAnyKeyToRender} from './hooks/useAnyKeyToRender';
import {useEffect} from 'react';

function App() {
  useAnyKeyToRender();
  useEffect(() => {
    console.log('fresh render');
  });
  return (
      <>
        <Checkbox/>
      </>
  );
}

export default App;
