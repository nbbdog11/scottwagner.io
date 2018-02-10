import React from 'react';
import PropTypes from 'prop-types';

const ContentContainer = ({ children }) => (
  <div style={{ backgroundColor: 'white', width: '80%', margin: '0 auto' }}>
    {children()}
  </div>
);

ContentContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ContentContainer;
