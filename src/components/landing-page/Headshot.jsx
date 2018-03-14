import React from 'react';
import Link from 'gatsby-link';
import headshot from '../../../images/headshot.jpg';

const Headshot = () => (
  <Link to="about">
    <img src={headshot} className="headshot" alt="headshot" />
  </Link>
);

export default Headshot;
