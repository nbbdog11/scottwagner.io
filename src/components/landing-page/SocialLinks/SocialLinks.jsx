import React from 'react';
import SocialLinkIcon from './SocialLinksIcon/SocialLinkIcon';
import styles from './social-links.module.less';

const socialSites = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/nbbdog11',
    iconClass: 'fab fa-twitter',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/nbbdog11/',
    iconClass: 'fab fa-instagram',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/nbbdog11',
    iconClass: 'fab fa-github-alt',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nbbdog11',
    iconClass: 'fab fa-linkedin-in',
  },
  {
    name: 'Blog',
    link: '/blog',
    iconClass: 'fas fa-book',
  },
];

const SocialLinks = () => (
  <div className={styles.socialLinksContainer}>
    {socialSites.map(site => <SocialLinkIcon site={site} key={site.name} />)}
  </div>
);

export default SocialLinks;
