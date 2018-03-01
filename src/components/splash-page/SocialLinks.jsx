import React from 'react';
import SocialLinkIcon from './SocialLinkIcon';
import twitter from '../../../images/social-icons/twitter.png';
import github from '../../../images/social-icons/github.png';
import linkedin from '../../../images/social-icons/linkedin.png';

const socialSites = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/nbbdog11',
    iconSrc: twitter,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/nbbdog11',
    iconSrc: github,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nbbdog11',
    iconSrc: linkedin,
  },
];

const linksContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  justifyItems: 'center',
};

const SocialLinks = () => (
  <div style={linksContainerStyle}>
    {socialSites.map(site => <SocialLinkIcon site={site} key={site.name} />)}
  </div>
);

export default SocialLinks;
