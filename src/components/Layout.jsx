import PropTypes from 'prop-types';
import Footer from './Footer/Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    <main className='container mt-4'>{children}</main>
    {location.pathname !== '/login' && <Footer />}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;