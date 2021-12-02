import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import {SiteLayout} from './SiteLayout';

const Callout = ({children}) => (
    <div className="callout">{children}</div>
);

export default function Main() {
  return (
      <SiteLayout
          menu={
            <ErrorBoundary>
              <p>Menu</p>
            </ErrorBoundary>
          }
      >
        <ErrorBoundary>
          <Callout>Callout</Callout>
        </ErrorBoundary>
        <ErrorBoundary>
          <h1>Contents</h1>
          <p>this is the main part of the example layout</p>
        </ErrorBoundary>
      </SiteLayout>
  );
}

