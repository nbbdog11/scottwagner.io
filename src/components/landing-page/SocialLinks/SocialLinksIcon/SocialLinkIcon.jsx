import React from 'react';
import PropTypes from 'prop-types';
import styles from './social-links-icon.module.less';

const SocialLinkIcon = ({ site }) => (
  <a
    className={styles.socialLink}
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
