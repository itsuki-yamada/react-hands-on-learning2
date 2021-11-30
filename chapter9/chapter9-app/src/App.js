import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import {SiteLayout} from './SiteLayout';

const Callout = ({children}) => (
    <div className="callout">{children}</div>
);

const ErrorScreen = ({error}) => {
  return (
      <div className="error">
        <h3>We are sorry... something went wrong</h3>
        <p>We cannot process your request at this mount</p>
        <p>ERROR: {error.message}</p>
      </div>
  );
};

export default function App() {
  return (
      <ErrorBoundary fallback={ErrorScreen}>
        <>
          <Callout>Callout</Callout>
          <h1>Contents</h1>
          <p>This is the main part of the example layout</p>
          <SiteLayout menu={<p>Menu</p>}>
          </SiteLayout>
        </>
      </ErrorBoundary>
  );
}