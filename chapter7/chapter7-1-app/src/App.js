import Checkbox from './components/Checkbox';
import {useAnyKeyToRender} from './hooks/useAnyKeyToRender';
import {useEffect} from 'react';

const word = ['word', 'coffee'];

function App() {
  useAnyKeyToRender();
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
