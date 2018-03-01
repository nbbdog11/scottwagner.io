import React from 'react';
import PropTypes from 'prop-types';

const socialLinkStyle = {
  color: 'white',
};

const SocialLinkIcon = ({ site }) => (
  <a
    href={site.link}
    style={socialLinkStyle}
  >
    <img
      src={site.iconSrc}
      alt={site.name}
    />
  </a>
);

SocialLinkIcon.propTypes = {
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialLinkIcon;
