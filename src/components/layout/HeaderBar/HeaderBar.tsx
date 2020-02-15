import React, { useState } from 'react';
import Link, { ImageLink } from 'components/Link'
import styled from 'styled-components';
import MenuButton from 'components/navigation/MenuButton';
import NavigationOverlay from 'components/navigation/NavigationOverlay';
import headshot from 'images/headshot.jpg';

const StyledHeaderBar = styled.header`
  border-bottom: 6px solid ${(props) => props.theme.colors.secondary};
  height: 50px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  @media (max-width: 799px) {
    padding: 10px 20px 10px;
  }

  @media (min-width: 800px) {
    padding: 10px 50px 10px;
  }
`;

const Headshot = styled.img`
  max-height: 100%;
  border-radius: 100%;
`;

const HeaderBar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <StyledHeaderBar>
      <ImageLink to="/">
        <Headshot src={headshot} alt="headshot" />
      </ImageLink>
      <MenuButton
        onOpen={() => {
          setNavOpen(true);
        }}
      />
      {navOpen && (
        <NavigationOverlay
          onClose={() => {
            setNavOpen(false);
          }}
        />
      )}
    </StyledHeaderBar>
  );
};

export default HeaderBar;
