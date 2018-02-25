import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ListLink = ({ to, children }) => (
  <div style={{ paddingBottom: '1rem' }}>
    <Link to={to} style={{ margin: 'auto' }}>
      {children}
    </Link>
  </div>
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ListLink;
