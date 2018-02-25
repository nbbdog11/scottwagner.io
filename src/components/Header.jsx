import React from 'react';
import Link from 'gatsby-link';
import HeaderLinksList from './HeaderLinksList';

const Header = () => (
  <div style={{ marginBottom: '1.5rem' }}>
    <h3 style={{ display: 'inline' }}>
      <Link to="/" style={{ textShadow: 'none' }}>
          Scott Wagner
      </Link>
    </h3>
    <HeaderLinksList />
  </div>
);

export default Header;
