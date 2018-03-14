import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from './HeaderBar';

const Layout = ({ children }) => (
  <div>
    <HeaderBar />
    <div className="layout-main">
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
