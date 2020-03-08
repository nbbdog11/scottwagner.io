import React from "react";
import styled from "styled-components";
import bitmoji from "images/bitmoji.png";
import Headshot from "../Headshot";
import SocialLinks from "../SocialLinks";
import { darken } from "polished";

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

const ContentBox = styled.section`
  min-height: 300px;
  width: 90%;
  margin: 1em 0;
  border: 5px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  box-shadow: 2px 6px 25px ${props => props.theme.colors.secondary};
  box-sizing: border-box;
`;

const ContentBoxHeader = styled.h2`
  background: ${props => props.theme.colors.secondary};
  color: white;
  margin: 0;
  padding: 1em 0;
  text-align: center;
`;

const AboutBox = styled(ContentBox)`
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

const ContentBoxItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2em;
  background: white;
  padding: 1em 2em;
`;

const ContentBoxItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  color: white;
  height: 100px;
  padding: 0.25em 1em;
  &:hover {
    background: ${props => darken(0.1, props.theme.colors.primary)};
    box-shadow: 2px 6px 25px ${props => darken(0.1, props.theme.colors.primary)};
    transform: scale(1.01);
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
        <ContentBox>
          <ContentBoxHeader>Projects</ContentBoxHeader>
          <ContentBoxItems>
            {projects.map(project => (
              <a key={project.name} href={project.link}>
                <ContentBoxItem>{project.name}</ContentBoxItem>
              </a>
            ))}
          </ContentBoxItems>
        </ContentBox>
        <ContentBox>
          <ContentBoxHeader>Talks</ContentBoxHeader>
          <ContentBoxItems>
            {talks.map(talk => (
              <a key={talk.name} href={talk.link}>
                <ContentBoxItem>{talk.name}</ContentBoxItem>
              </a>
            ))}
          </ContentBoxItems>
        </ContentBox>
        <ContentBox>
          <ContentBoxHeader>Blog Posts</ContentBoxHeader>
          <ContentBoxItems>
            {blogPosts.map(blogPost => (
              <a key={blogPost.name} href={blogPost.link}>
                <ContentBoxItem>{blogPost.name}</ContentBoxItem>
              </a>
            ))}
          </ContentBoxItems>
        </ContentBox>
      </ContentContainer>
    </>
  );
};

export default LandingPage;
