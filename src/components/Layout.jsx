import React from "react";
import NavBar from "./NavBar";
import PropTypes from "prop-types";
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>Astrolabe</h1>
    </header>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
