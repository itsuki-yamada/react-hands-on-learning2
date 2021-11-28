import React, {useEffect, useState} from 'react';
import useMountedRef from './useMountedRef';

export default function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const mounted = useMountedRef();

  useEffect(() => {
    if (!uri) return;
    fetch(uri).
        then(data => {
          if (!mounted.current) throw new Error('component is not mounted');
          return data;
        }).
        then(data => data.json()).
        then(setData).
        then(() => setLoading(false)).
        catch(setError);
  }, [uri]);
  return {loading, data, error};
}