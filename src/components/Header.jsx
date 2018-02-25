import React from 'react';
import Link from 'gatsby-link';
import logo from '../../images/logo.jpg';

const headerStyle = {
  height: 'auto',
  margin: 'auto',
  backgroundColor: 'hsl(210, 9%, 96%)',
};

const imageStyle = {
  margin: 'auto',
  display: 'block',
  borderRadius: '100px',
};

const Header = () => (
  <div style={headerStyle}>
    <Link to="/">
      <img
        src={logo}
        style={imageStyle}
        alt="logo"
      />
    </Link>
  </div>
);

export default Header;
