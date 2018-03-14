import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from './HeaderBar';
import '../../styles/layout.css';

const Layout = ({ children, title }) => (
  <div>
    <HeaderBar />
    <div className="layout-background">
      <div className="layout-main">
        <h1 className="title">{title}</h1>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
