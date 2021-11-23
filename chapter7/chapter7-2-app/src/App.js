import {useEffect, useLayoutEffect} from 'react';

function App() {
  useEffect(() => console.log('useEffect'));
  useLayoutEffect(() => console.log('useLayoutEffect'));
  return (
      <>
        ready
      </>
  );
}

export default App;
