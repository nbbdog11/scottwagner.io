import React from 'react';
import PropTypes from 'prop-types';

const anchorStyle = {
  textDecoration: 'none',
  color: 'white',
};

const SocialLinkIcon = ({ site }) => (
  <a
    style={anchorStyle}
    href={site.link}
  >
    <i
      className={`${site.iconClass} fa-2x`}
      alt={site.name}
    />
  </a>

);

SocialLinkIcon.propTypes = {
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialLinkIcon;
