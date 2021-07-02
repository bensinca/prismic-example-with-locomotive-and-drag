import React from 'react';
import { Footer, Header } from './';

/**
 * Default site layout component
 */
const DefaultLayout = ({ wrapperClass, menuDoc, children }) => {
  return (
    <div data-scroll-container className={wrapperClass}>
      <Header menuDoc={menuDoc} />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
