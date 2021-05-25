/* eslint-disable react/destructuring-assignment */
import React from 'react';

// Components
import Footer from './Footer';

const Layout = props => (
  <div className='App'>
    { props.children }
    <Footer />
  </div>
);

export default Layout;
