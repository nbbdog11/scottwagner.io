import React from "react";
import styled from "styled-components";

type StyledSocialLinkIconProps = {
  activeColor: string;
};

const StyledSocialLinkIcon = styled.a<StyledSocialLinkIconProps>`
  color: #8a8686;
  &:hover,
  &:focus {
    color: ${props => props.activeColor};
  }
`;

type SocialLinkIconProps = {
  site: {
    activeColor: string;
    link: string;
    iconClass: string;
  };
};

const SocialLinkIcon: React.FC<SocialLinkIconProps> = ({ site }) => (
  <StyledSocialLinkIcon activeColor={site.activeColor} href={site.link}>
    <i className={`${site.iconClass} fa-2x`} />
  </StyledSocialLinkIcon>
);

export default SocialLinkIcon;
