import React, {Suspense, useState} from 'react';
import {ClimbingBoxLoader} from 'react-spinners';
import Agreement from './Agreement';

const Main = React.lazy(() => import('./Main'));

export default function App() {
  const [agree, setAgree] = useState(false);
  if (!agree) return <Agreement onAgree={() => setAgree(true)}/>;
  return (
      <Suspense fallback={<ClimbingBoxLoader/>}>
        <Main/>
      </Suspense>
  );
}