import React from "react";
import NavBar from "./NavBar";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>Astrolabe</h1>
    </header>
    {<NavBar />}
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
