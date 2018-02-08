import React from 'react';
import ListLink from './ListLink';

const HeaderLinksList = () => (
  <ul style={{ listStyle: 'none', float: 'right' }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/posts/">Posts</ListLink>
  </ul>
);

export default HeaderLinksList;
