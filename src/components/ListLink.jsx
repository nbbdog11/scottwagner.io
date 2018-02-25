import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ListLink = ({ to, children }) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={to}>
      {children}
    </Link>
  </li>
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ListLink;
