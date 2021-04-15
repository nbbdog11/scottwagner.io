import { useState } from "react";
import styled from "styled-components";
import { ItemType } from "components/ContentBox/ContentBoxItem/types";
import ContentBoxItem from "components/ContentBox/ContentBoxItem";

export const StyledContentBox = styled.section`
  min-height: 300px;
  width: 90%;
  margin: 1em 0;
  border: 5px solid ${(props) => props.theme.colors.secondary};
  border-radius: 2px;
  box-shadow: 2px 6px 25px ${(props) => props.theme.colors.secondary};
  box-sizing: border-box;
`;

const ContentBoxHeader = styled.h2`
  background: ${(props) => props.theme.colors.secondary};
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

type ContentBoxProps = {
  header: string;
  items: {
    name: string;
    link: string;
  }[];
};

const ContentBox = ({ header, items }: ContentBoxProps) => {
  const [activeItem, setActiveItem] = useState("");
  const clearActiveItem = () => setActiveItem("");
  const getItemType = (name: string) => {
    if (activeItem === name) {
      return ItemType.ACTIVE;
    }
    return activeItem === "" ? ItemType.DEFAULT : ItemType.INACTIVE;
  };
  return (
    <StyledContentBox>
      <ContentBoxHeader>{header}</ContentBoxHeader>
      <ContentBoxItems>
        {items.map(({ name, link }) => (
          <ContentBoxItem
            key={name}
            onMouseOver={() => setActiveItem(name)}
            onMouseOut={clearActiveItem}
            onFocus={() => setActiveItem(name)}
            onBlur={clearActiveItem}
            link={link}
            type={getItemType(name)}
          >
            {name}
          </ContentBoxItem>
        ))}
      </ContentBoxItems>
    </StyledContentBox>
  );
};

export default ContentBox;
