import {useEffect, useLayoutEffect, useState} from 'react';

/**
 * 描画前に必要になるwidthとheightを取得する
 * @returns {number[]}
 */
function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  });

  return [width, height];
}

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
