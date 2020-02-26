import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { darken } from "polished";

export const ImageLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${props => darken(0.1, props.theme.colors.secondary)};
  padding-bottom: 2px;
`;

export default styled(ImageLink)`
  &:hover,
  &:focus {
    border-bottom: 1px solid
      ${props => darken(0.1, props.theme.colors.secondary)};
    transform: scale(1.1);
  }
`;
