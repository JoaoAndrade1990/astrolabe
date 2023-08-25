import React from 'react';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import Footer from './Footer/Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    {/* <NavBar /> */}
    <main className='container mt-4'>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
