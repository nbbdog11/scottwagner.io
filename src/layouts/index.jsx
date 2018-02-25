import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import HeaderLinksList from '../components/HeaderLinksList';
import ContentContainer from '../components/ContentContainer';

const divStyle = {
  margin: '0 auto',
  maxWidth: '100%',
  height: '100%',
  padding: '1.25rem 1rem',
};

const Layout = ({ children }) => (
  <div style={divStyle}>
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/" style={{ textShadow: 'none' }}>
        <h3 style={{ display: 'inline' }}>Scott Wagner</h3>
      </Link>
      <HeaderLinksList />
    </header>
    <ContentContainer>
      {children}
    </ContentContainer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
