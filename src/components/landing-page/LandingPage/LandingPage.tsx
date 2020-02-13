import React from 'react';
import styled from 'styled-components';
import backgroundImage from 'images/background.jpg';
import LandingPageOverlay from 'components/landing-page/LandingPageOverlay';

const StyledLandingPage = styled.div`
  min-height: 100vh;
  @media (min-width: 400px) {
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    display: flex;
  }
`;

const LandingPage = () => (
  <StyledLandingPage>
    <LandingPageOverlay />
  </StyledLandingPage>
);

export default LandingPage;
