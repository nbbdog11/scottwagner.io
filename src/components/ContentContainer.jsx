import React from 'react';
import PropTypes from 'prop-types';

const ContentContainer = ({ children }) => {
  const contentStyle = {
    backgroundColor: 'white',
    width: '70%',
    margin: '0 auto',
    paddingLeft: '5px',
    paddingRight: '5px',
    borderRadius: '3px',
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
