import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>
      <span style={{ color: 'white' }}>
        {props.children}
      </span>
    </Link>
  </li>
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ListLink;
