import React from 'react';
import Link from 'gatsby-link';
import HeaderLinksList from './HeaderLinksList';

const headerStyle = {
  height: '50px',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  backgroundColor: 'hsl(210, 9%, 96%)',
};

const Header = () => (
  <div style={headerStyle}>
    <h3 style={{ marginLeft: '1rem' }}>
      <Link to="/" style={{ textShadow: 'none' }}>
          Scott Wagner
      </Link>
    </h3>
    <HeaderLinksList
      style={{ alignSelf: 'center', justifySelf: 'end' }}
    />
  </div>
);

export default Header;
