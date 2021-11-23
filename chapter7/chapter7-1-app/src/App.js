import Checkbox from './components/Checkbox';
import {useAnyKeyToRender} from './hooks/useAnyKeyToRender';
import {useEffect} from 'react';

function App() {
  useAnyKeyToRender();
  const word = ['word', 'coffee'];
  useEffect(() => {
    console.log('fresh render');
  }, [word]);
  return (
      <>
        <Checkbox/>
      </>
  );
}

export default App;
