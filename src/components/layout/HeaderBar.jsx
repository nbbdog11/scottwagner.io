import React from 'react';
import Link from 'gatsby-link';
import headshot from '../../../images/headshot.jpg';

const HeaderBar = () => (
  <div className="header-bar">
    <Link to="/">
      <img src={headshot} className="headshot" alt="headshot" />
    </Link>
  </div>
);

export default HeaderBar;
