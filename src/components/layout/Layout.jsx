import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from './HeaderBar';
import '../../styles/layout.less';

const Layout = ({ children, title, subtitle }) => (
  <div>
    <HeaderBar />
    <div className="layout-background" />
    <div className="layout-main">
      <h1 className="title">{title}</h1>
      {subtitle && <h3 className="subtitle">{subtitle}</h3>}
      <div className="content">
        {children}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Layout.defaultProps = {
  subtitle: null,
};

export default Layout;
