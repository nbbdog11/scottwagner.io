import React from 'react';
import SocialLinkIcon from './SocialLinkIcon';

const socialSites = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/nbbdog11',
    iconClass: 'fab fa-twitter',
    hoverColor: '#1da1f2',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/nbbdog11/',
    iconClass: 'fab fa-instagram',
    hoverColor: '#af1883',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/nbbdog11',
    iconClass: 'fab fa-github-alt',
    hoverColor: '#24292e',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nbbdog11',
    iconClass: 'fab fa-linkedin-in',
    hoverColor: '#0077b5',
  },
];

const linksContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  gridColumnGap: '12px',
  justifyItems: 'center',
};

const SocialLinks = () => (
  <div style={linksContainerStyle}>
    {socialSites.map(site => <SocialLinkIcon site={site} key={site.name} />)}
  </div>
);

export default SocialLinks;
