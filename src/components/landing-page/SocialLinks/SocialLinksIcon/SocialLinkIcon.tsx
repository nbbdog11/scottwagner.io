import { FC } from "react";
import styled from "styled-components";

type StyledSocialLinkIconProps = {
  activeColor: string;
};

const StyledSocialLinkIcon = styled.a<StyledSocialLinkIconProps>`
  background: white;
  color: #8a8686;
  &:hover,
  &:focus {
    color: ${(props) => props.activeColor};
    transform: scale(1.2);
  }
`;

type SocialLinkIconProps = {
  site: {
    activeColor: string;
    link: string;
    iconClass: string;
    name: string;
  };
};

const SocialLinkIcon: FC<SocialLinkIconProps> = ({ site }) => (
  <StyledSocialLinkIcon
    activeColor={site.activeColor}
    href={site.link}
    title={site.name}
  >
    <i className={`${site.iconClass} fa-2x`} />
  </StyledSocialLinkIcon>
);

export default SocialLinkIcon;
