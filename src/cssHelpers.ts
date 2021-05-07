import { css, FlattenSimpleInterpolation } from "styled-components";

export const minWidthTablet = (styles: FlattenSimpleInterpolation) => css`
  @media screen and (min-width: 769px) {
    ${styles}
  }
`;

export const maxWidthTablet = (styles: FlattenSimpleInterpolation) => css`
  @media screen and (max-width: 768px) {
    ${styles}
  }
`;
