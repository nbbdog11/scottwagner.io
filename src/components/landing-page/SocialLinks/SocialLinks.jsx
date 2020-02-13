import React from 'react';
import styled from 'styled-components';
import SocialLinkIcon from './SocialLinksIcon/SocialLinkIcon';
import theme from '../../../pages/theme';

const socialSites = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/nbbdog11',
    iconClass: 'fab fa-twitter',
    activeColor: '#1da1f2',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/nbbdog11/',
    iconClass: 'fab fa-instagram',
    activeColor: '#af1883',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/nbbdog11',
    iconClass: 'fab fa-github-alt',
    activeColor: '#24292e',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nbbdog11',
    iconClass: 'fab fa-linkedin-in',
    activeColor: '#0077b5',
  },
  {
    name: 'Blog',
    link: '/blog',
    iconClass: 'fas fa-book',
    activeColor: theme.colors.secondary,
  },
];

const StyledSocialLinks = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-column-gap: 12px;
  justify-items: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  @media (max-width: 399px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media (max-height: 300px) {
    padding: 5px;
  }

  @media (min-height: 301px) {
    padding: 15px;
  }
`;

const SocialLinks = () => (
  <StyledSocialLinks>
    {socialSites.map((site) => <SocialLinkIcon site={site} key={site.name} />)}
  </StyledSocialLinks>
);

export default SocialLinks;
