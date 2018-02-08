import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ListLink;
