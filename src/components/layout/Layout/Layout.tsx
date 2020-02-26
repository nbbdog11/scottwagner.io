import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import HeaderBar from "components/layout/HeaderBar";

const LayoutBackground = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 110px;
  min-height: 100vh;
  z-index: -1;
`;

const LayoutMain = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  box-shadow: 2px 6px 25px rgba(0, 0, 0, 0.1);

  @media (min-width: 800px) {
    margin-top: 110px;
    width: 70%;
    padding: 5px 50px 5px;
  }

  @media (max-width: 799px) {
    margin-top: 76px;
    padding: 5px 20px 5px;
    min-height: 100vh;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
`;

const Subtitle = styled.h3`
  color: ${props => lighten(0.03, props.theme.colors.primary)};
`;

const Content = styled.div`
  color: ${props => lighten(0.05, props.theme.colors.primary)};
  line-height: 1.6;
`;

type LayoutProps = {
  title: string;
  subtitle?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title, subtitle }) => (
  <>
    <HeaderBar />
    <LayoutBackground />
    <LayoutMain>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Content>{children}</Content>
    </LayoutMain>
  </>
);

export default Layout;
