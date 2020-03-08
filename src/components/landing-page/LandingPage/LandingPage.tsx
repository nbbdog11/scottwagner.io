import React from "react";
import styled from "styled-components";
import bitmoji from "images/bitmoji.png";
import Headshot from "../Headshot";
import SocialLinks from "../SocialLinks";
import ContentBox, { StyledContentBox } from "../ContentBox";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  padding: 0.5em;
  margin-bottom: 100px;
`;

const Bitmoji = styled.img`
  width: 80px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutBox = styled(StyledContentBox)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2em;

  h3 {
    margin: 0;
  }

  & ${Headshot} {
    position: absolute;
    top: -75px;
  }
`;

const projects = [
  {
    name: "scottwagner.io",
    link: "https://github.com/nbbdog11/scottwagner.io"
  },
  {
    name: "http-response-tester",
    link: "https://github.com/nbbdog11/http-response-tester"
  }
];

const talks = [
  {
    name: "TDD and UIs: What, Why, and How",
    link: "https://github.com/nbbdog11/tdd-ui-presentation"
  }
];

const blogPosts = [
  {
    name: "The Hunger for Learning: Based on a True Story",
    link:
      "https://dev.to/nbbdog11/the-hunger-for-learning-based-on-a-true-story-2bke"
  }
];

const LandingPage = () => {
  return (
    <>
      <Header>
        <Bitmoji src={bitmoji} alt="Scott Bitmoji" />
      </Header>
      <SocialLinks />
      <ContentContainer>
        <AboutBox>
          <Headshot />
          <h1>Scott Wagner</h1>
          <h3>Full-Stack Web Developer</h3>
          <h3>Team Lead</h3>
        </AboutBox>
        <ContentBox header="Projects" items={projects} />
        <ContentBox header="Talks" items={talks} />
        <ContentBox header="Blog Posts" items={blogPosts} />
      </ContentContainer>
    </>
  );
};

export default LandingPage;
