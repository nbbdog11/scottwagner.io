import styled, { css } from "styled-components";
import RelativeImage from "components/RelativeImage";
import { minWidthTablet } from "cssHelpers";

const ImageContainer = styled.div`
  position: relative;
  min-width: 150px;
  width: 60%;
  max-width: 400px;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  border-radius: 5px;
  > * {
    border-radius: 5px;
    height: 0;
    padding-top: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 4rem;
`;

const SocialLink = styled.div`
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  background: hsl(206, 100%, 35%);
  background: linear-gradient(
    180deg,
    hsl(206, 100%, 35%) 0%,
    hsl(206, 100%, 60%) 100%
  );
  padding: 2rem;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  color: white;
  text-align: center;
  margin: 0 auto;
  h1 {
    max-width: 20ch;
  }
  ${minWidthTablet(css`
    flex-direction: row;
  `)}
`;

const Main = styled.main`
  padding: 2rem;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  max-width: 800px;
  margin: 0 auto;
`;

const StyledBox = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2), 0 5px 15px hsla(0, 0%, 0%, 0.1);
  background-color: white;
  padding: 1rem;
  font-weight: 300;
  h4 {
    color: hsl(206, 100%, 25%);
  }
`;

type BoxProps = {
  title: string;
  link: string;
  description: string;
};

const Box = ({ title, link, description }: BoxProps) => {
  return (
    <a href={link}>
      <StyledBox>
        <h4>{title}</h4>
        <p>{description}</p>
      </StyledBox>
    </a>
  );
};

const WorkSection = styled.section`
  h3 {
    color: hsl(206, 100%, 25%);
    margin-bottom: 1.5rem;
  }
`;

const BoxGrid = styled.div`
  display: grid;
  gap: 3rem;
`;

const ConnectSection = styled.footer`
  background: hsl(206, 100%, 35%);
  background: linear-gradient(
    0deg,
    hsl(206, 100%, 35%) 0%,
    hsl(206, 100%, 60%) 100%
  );
  color: white;
  margin-top: 6rem;
  text-align: center;
  padding: 2rem;
  a {
    color: white;
  }
`;

const Index = () => {
  return (
    <>
      <Header>
        <HeaderContent>
          <h1>
            Hi, I&apos;m <span>Scott</span> and I&apos;m a{" "}
            <span>Web Developer</span>
          </h1>
          <ImageContainer>
            <RelativeImage
              src="scott.png"
              layout="responsive"
              height={0}
              width={0}
            />
          </ImageContainer>
        </HeaderContent>
      </Header>
      <Main>
        <MainContent>
          <WorkSection>
            <h3>Projects</h3>
            <BoxGrid>
              <Box
                title="scottwagner.io"
                link="https://github.com/nbbdog11/scottwagner.io"
                description="GitHub repo for this site."
              />
              <Box
                title="Foodie Buddies"
                link="https://foodiebuddiespod.com/"
                description="A podcast I co-host about food, respect, and inclusion."
              />
              <Box
                title="http-response-tester"
                link="https://github.com/nbbdog11/http-response-tester"
                description="A NodeJS utility for stubbing API responses."
              />
            </BoxGrid>
          </WorkSection>
          <WorkSection>
            <h3>Blog</h3>
            <BoxGrid>
              <Box
                title="The Hunger for Learning: Based on a True Story"
                link="https://dev.to/nbbdog11/the-hunger-for-learning-based-on-a-true-story-2bke"
                description="What I learned while building out my website."
              />
              <Box
                title="TIL: DRYing Out Styles With styled-components"
                link="https://dev.to/nbbdog11/til-drying-out-styles-with-styled-components-b29"
                description="Sharing common styles while using styled-components in React."
              />
            </BoxGrid>
          </WorkSection>
          <WorkSection>
            <h3>Talks</h3>
            <BoxGrid>
              <Box
                title="TDD and UIs - What, Why, and How"
                link="https://github.com/nbbdog11/tdd-ui-presentation"
                description="Effectively building web UIs using test-driven development."
              />
            </BoxGrid>
          </WorkSection>
        </MainContent>
      </Main>
      <ConnectSection>
        <h3>Let&apos;s Connect</h3>
        <SocialLinks>
          <SocialLink>
            <a href="https://dev.to/nbbdog11">
              <i className="fab fa-dev fa-2x" />
            </a>
          </SocialLink>
          <SocialLink>
            <a href="https://github.com/nbbdog11">
              <i className="fab fa-github-alt fa-2x" />
            </a>
          </SocialLink>
          <SocialLink>
            <a href="https://www.linkedin.com/in/nbbdog11">
              <i className="fab fa-linkedin-in fa-2x" />
            </a>
          </SocialLink>
          <SocialLink>
            <a href="https://www.instagram.com/nbbdog11/">
              <i className="fab fa-instagram fa-2x" />
            </a>
          </SocialLink>
        </SocialLinks>
      </ConnectSection>
    </>
  );
};

export default Index;
