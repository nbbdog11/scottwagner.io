import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Headshot from 'components/landing-page/Headshot';
import JobsScroller from 'components/landing-page/JobsScroller';
import SocialLinks from 'components/landing-page/SocialLinks';

const StyledLandingPageOverlay = styled.div`
  background-color: white;
  @media (min-width: 400px) {
    box-shadow: 2px 6px 25px rgba(0, 0, 0, 0.1);
    border-top: 6px solid ${(props) => props.theme.colors.secondary};
    max-width: 400px;
    flex: 0 1 80%;
    margin: auto;
  }

  @media (max-width: 399px) {
    height: 100vh;
  }
`;

const LandingPageOverlayContent = styled.div`
  @media (max-height: 300px) {
    padding-top: 5px;
  }

  @media (min-height: 301px) {
    padding-top: 20px;
  }
`;

const Name = styled.div`
  text-align: center;
  font-weight: 700;
  margin: 20px 0px 5px;
  color: ${(props) => props.theme.colors.primary};
`;

const LandingPageOverlay = () => (
  <StyledLandingPageOverlay>
    <LandingPageOverlayContent>
      <Headshot />
      <Link to="about">
        <Name>Scott Wagner</Name>
      </Link>
      <JobsScroller />
      <SocialLinks />
    </LandingPageOverlayContent>
  </StyledLandingPageOverlay>
);

export default LandingPageOverlay;
