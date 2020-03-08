import React from "react";
import styled from "styled-components";
import { darken } from "polished";

export const StyledContentBox = styled.section`
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
  a {
    display: block;
    height: 100%;
    width: 100%;
    color: white;
    text-align: center;
    line-height: 100px;
    text-decoration: none;
    &:visited {
      color: white;
    }
  }
  &:hover {
    background: ${props => darken(0.1, props.theme.colors.primary)};
    box-shadow: 2px 6px 25px ${props => darken(0.1, props.theme.colors.primary)};
    transform: scale(1.01);
  }
`;

type ContentBoxProps = {
  header: string;
  items: {
    name: string;
    link: string;
  }[];
};

const ContentBox: React.FC<ContentBoxProps> = ({ header, items }) => {
  return (
    <StyledContentBox>
      <ContentBoxHeader>{header}</ContentBoxHeader>
      <ContentBoxItems>
        {items.map(item => (
          <ContentBoxItem key={item.name}>
            <a href={item.link}>{item.name}</a>
          </ContentBoxItem>
        ))}
      </ContentBoxItems>
    </StyledContentBox>
  );
};

export default ContentBox;
