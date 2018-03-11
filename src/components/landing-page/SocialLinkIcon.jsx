import React from 'react';
import PropTypes from 'prop-types';

const SocialLinkIcon = ({ site }) => (
  <a
    className="social-link"
    id={site.name.toLowerCase()}
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
