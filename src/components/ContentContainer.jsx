import React from 'react';
import PropTypes from 'prop-types';

const ContentContainer = ({ children }) => {
  const contentStyle = {
    backgroundColor: 'white',
    width: '70%',
    margin: '5px auto',
    paddingLeft: '5px',
    paddingRight: '5px',
    borderRadius: '1px',
    boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.2)',
  };

  return (
    <div style={contentStyle}>
      {children()}
    </div>
  );
};

ContentContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ContentContainer;
