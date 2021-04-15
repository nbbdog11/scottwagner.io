import styled from "styled-components";
import { darken, lighten } from "polished";
import { ContentBoxItemProps, ItemType } from "./types";
import { FC } from "react";

type StyledContentBoxItemProps = Pick<ContentBoxItemProps, "type">;
const StyledContentBoxItem = styled.a<StyledContentBoxItemProps>`
  display: block;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  &:visited {
    color: white;
  }
  ${(props) => {
    if (props.type === ItemType.ACTIVE) {
      return {
        background: darken(0.1, props.theme.colors.primary),
        boxShadow: `2px 6px 25px ${darken(0.1, props.theme.colors.primary)}`,
        transform: "scale(1.01)",
      };
    }
    if (props.type === ItemType.INACTIVE) {
      return {
        background: lighten(0.2, props.theme.colors.primary),
        transform: "scale(0.99)",
      };
    }
    return {};
  }}
`;

const ContentContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  padding: 0.2em;
  text-align: center;
`;

const ContentBoxItem: FC<ContentBoxItemProps> = ({
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  children,
  link,
  type,
}) => {
  return (
    <StyledContentBoxItem
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
      href={link}
      type={type}
    >
      <ContentContainer>{children}</ContentContainer>
    </StyledContentBoxItem>
  );
};

export default ContentBoxItem;
