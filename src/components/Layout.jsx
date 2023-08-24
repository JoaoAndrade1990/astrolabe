import React from "react";
import NavBar from "./NavBar";
import PropTypes from "prop-types";
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
