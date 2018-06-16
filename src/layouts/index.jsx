import PropTypes from 'prop-types';

const Layout = ({ children }) => children();

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
