import React from "react";
import styled from "styled-components";
import SocialLinkIcon from "./SocialLinksIcon";

const socialSites = [
  {
    name: "Twitter",
    link: "https://twitter.com/nbbdog11",
    iconClass: "fab fa-twitter",
    activeColor: "#1da1f2"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nbbdog11/",
    iconClass: "fab fa-instagram",
    activeColor: "#af1883"
  },
  {
    name: "GitHub",
    link: "https://github.com/nbbdog11",
    iconClass: "fab fa-github-alt",
    activeColor: "#24292e"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nbbdog11",
    iconClass: "fab fa-linkedin-in",
    activeColor: "#0077b5"
  },
  {
    name: "Blog",
    link: "https://dev.to/nbbdog11",
    iconClass: "fab fa-dev",
    activeColor: "#0a0a0a"
  }
];

const StyledSocialLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
  justify-items: center;
  background: white;
  padding: 0.5em;
`;

const SocialLinks = () => (
  <StyledSocialLinks>
    {socialSites.map(site => (
      <SocialLinkIcon site={site} key={site.name} />
    ))}
  </StyledSocialLinks>
);

export default SocialLinks;
