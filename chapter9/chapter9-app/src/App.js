import React from 'react';

const SiteLayout = ({children, menu = c => null}) => {
  return (
      <div className="site-container">
        <div>{menu}</div>
        <div>{children}</div>
      </div>
  );
};

const Callout = ({children}) => (
    <div className="callout">{children}</div>
);

export default function App() {
  return (
      <SiteLayout menu={<p>Menu</p>}>
        <>
          <Callout>Callout</Callout>
          <h1>Contents</h1>
          <p>This is the main part of the example layout</p>
        </>
      </SiteLayout>
  );
}