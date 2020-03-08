import styled from "styled-components";
import { darken, lighten } from "polished";
import { ContentBoxItemProps, ItemType } from "./types";

const ContentBoxItem = styled.div<ContentBoxItemProps>`
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
  ${props => {
    if (props.type === ItemType.ACTIVE) {
      return {
        background: darken(0.1, props.theme.colors.primary),
        boxShadow: `2px 6px 25px ${darken(0.1, props.theme.colors.primary)}`,
        transform: "scale(1.01)"
      };
    }
    if (props.type === ItemType.INACTIVE) {
      return {
        background: lighten(0.2, props.theme.colors.primary),
        transform: "scale(0.99)"
      };
    }
    return {};
  }}
  &:hover {
  }
`;

export default ContentBoxItem;
