import React, {useEffect} from 'react';
import {useIterator} from '../hooks/useIterator';

const RepoMenu = ({repositories, onSelect = f => f}) => {
  const [{name}, previous, next] = useIterator(repositories);
  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);
  return (
      <div style={{display: 'flex'}}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
  );
};

export default RepoMenu;