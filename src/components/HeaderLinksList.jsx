import React from 'react';
import ListLink from './ListLink';

const HeaderLinksList = () => (
  <div style={{ display: 'grid', justifyItems: 'center' }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/posts/">Posts</ListLink>
  </div>
);

export default HeaderLinksList;
