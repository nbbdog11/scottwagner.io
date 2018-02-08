import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import HeaderLinksList from '../components/HeaderLinksList';

const Layout = ({ children }) => (
  <div style={{ margin: '0 auto', maxWidth: '80%', padding: '1.25rem 1rem' }}>
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
        <h3 style={{ display: 'inline' }}>Scott Wagner</h3>
      </Link>
      <HeaderLinksList />
    </header>
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
