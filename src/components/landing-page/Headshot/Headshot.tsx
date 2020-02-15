import React from "react";
import { ImageLink } from "components/Link";
import styled from "styled-components";
import headshot from "images/headshot.jpg";

const StyledHeadshot = styled.img`
  margin: auto;
  display: block;
  border-radius: 100%;
`;

const Headshot = () => (
  <ImageLink to="about">
    <StyledHeadshot src={headshot} alt="headshot" />
  </ImageLink>
);

export default Headshot;
