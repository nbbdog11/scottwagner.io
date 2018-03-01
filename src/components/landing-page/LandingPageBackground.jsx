import React from 'react';
import PropTypes from 'prop-types';
import background from '../../../images/background.jpg';

const LandingPageBackground = ({ height }) => {
  const style = {
    margin: '0 auto',
    maxWidth: '100%',
    minHeight: height,
    height: '100%',
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return <div style={style} />;
};

LandingPageBackground.propTypes = {
  height: PropTypes.number.isRequired,
};

export default LandingPageBackground;
