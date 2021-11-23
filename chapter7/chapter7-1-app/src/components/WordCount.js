import {useEffect, useMemo} from 'react';
import {useAnyKeyToRender} from '../hooks/useAnyKeyToRender';

export const WordCount = ({children}) => {
  useAnyKeyToRender();
  const words = useMemo(() => {
    return children.split(' ');
  }, [children]);

  useEffect(() => {
    console.log('fresh render');
  }, [words]);

  return (
      <>
        <p>{children}</p>
        <p>
          <strong>{words.length} - words</strong>
        </p>
      </>
  );
};
