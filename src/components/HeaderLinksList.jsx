import React from 'react';
import PropTypes from 'prop-types';
import ListLink from './ListLink';

const builtInStyle = {
  listStyle: 'none',
  float: 'right',
};

const HeaderLinksList = ({ style }) => {
  const listStyle = {
    ...builtInStyle,
    ...style,
  };

  return (
    <ul style={listStyle}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/posts/">Posts</ListLink>
    </ul>
  );
};

HeaderLinksList.propTypes = {
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

HeaderLinksList.defaultProps = {
  style: {},
};


export default HeaderLinksList;
