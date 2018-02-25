import React from 'react';
import PropTypes from 'prop-types';
import HeaderLinksList from './HeaderLinksList';

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: '20% auto',
};

const contentStyle = {
  backgroundColor: 'white',
  width: '90%',
  margin: '5px auto',
  paddingLeft: '5px',
  paddingRight: '5px',
  borderRadius: '1px',
  boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.2)',
};

const ContentContainer = ({ children }) => (
  <div style={containerStyle}>
    <div style={contentStyle}>
      <HeaderLinksList />
    </div>
    <div style={contentStyle}>
      {children()}
    </div>
  </div>
);

ContentContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ContentContainer;
