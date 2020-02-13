import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSocialLinkIcon = styled.a`
  color: #8a8686;
  &:hover,
  &:focus {
    color: ${(props) => props.activeColor}
  }
`;

const SocialLinkIcon = ({ site }) => (
  <StyledSocialLinkIcon
    activeColor={site.activeColor}
    href={site.link}
  >
    <i className={`${site.iconClass} fa-2x`} alt={site.name} />
  </StyledSocialLinkIcon>
);

SocialLinkIcon.propTypes = {
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    activeColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialLinkIcon;
