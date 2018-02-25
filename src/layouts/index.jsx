import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import HeaderLinksList from '../components/HeaderLinksList';
import ContentContainer from '../components/ContentContainer';
import '../styles/main.css';

const divStyle = {
  margin: '0 auto',
  maxWidth: '100%',
  height: '100%',
  padding: '1.25rem 1rem',
};

const Layout = ({ children }) => (
  <div style={divStyle}>
    <div style={{ marginBottom: '1.5rem' }}>
      <h3 style={{ display: 'inline' }}>
        <Link to="/" style={{ textShadow: 'none' }}>
          Scott Wagner
        </Link>
      </h3>
      <HeaderLinksList />
    </div>
    <ContentContainer>
      {children}
    </ContentContainer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
