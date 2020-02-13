import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import headshot from 'images/headshot.jpg';

const StyledHeadshot = styled.img`
  margin: auto;
  display: block;
  border-radius: 100%;
`;

const Headshot = () => (
  <Link to="about">
    <StyledHeadshot src={headshot} alt="headshot" />
  </Link>
);

export default Headshot;
