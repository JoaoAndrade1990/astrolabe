import React from "react";
import NavBar from "./NavBar";
import PropTypes from "prop-types";

const Layout = ({children}) => (
    <div>
    {/* </div>{ <NavBar/> */}
    <header>
         <h1>Astrolabe</h1>
     </header>
    <main>
        {children}
    </main>
    </div>
  );

  Layout.propTypes= {
    children: PropTypes.node,
  };

  export default Layout;