import React from "react";
import styled from "styled-components";

const StyledLikesGrid = styled.div`
  display: grid;

  @media (min-width: 800px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 799px) {
    grid-template-columns: 100%;
  }

  & .likesColumnHeader {
  }
`;

const LikesColumnHeader = styled.header`
  text-align: center;
  font-weight: 700;
`;

const LikesGrid = () => (
  <>
    <div>Things I Like:</div>
    <StyledLikesGrid>
      <div>
        <LikesColumnHeader>Software</LikesColumnHeader>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>AWS</li>
          <li>Terraform</li>
          <li>XP</li>
        </ul>
      </div>
      <div>
        <LikesColumnHeader>Not-Software</LikesColumnHeader>
        <ul>
          <li>Coffee</li>
          <li>Vinyl</li>
          <li>Drumming</li>
          <li>Coffee</li>
          <li>Espresso</li>
        </ul>
      </div>
    </StyledLikesGrid>
  </>
);

export default LikesGrid;
