import React from "react";
import Link, { ImageLink } from "components/Link";
import styled from "styled-components";
import headshot from "images/headshot.jpg";

const StyledHeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 6px solid ${props => props.theme.colors.secondary};
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
  height: 50px;
  width: 50px;
  border-radius: 100%;
`;

const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

const HeaderBar = () => {
  return (
    <StyledHeaderBar>
      <ImageLink to="/">
        <Headshot src={headshot} alt="headshot" />
      </ImageLink>
      <HeaderLinks>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </HeaderLinks>
    </StyledHeaderBar>
  );
};

export default HeaderBar;
