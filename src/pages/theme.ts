import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export const GlobalStyling = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: "Nunito Sans", sans-serif;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => darken(0.1, props.theme.colors.secondary)};
  }
`;

export default {
  colors: {
    primary: '#444444',
    secondary: '#7081b3',
    tertiary: '#f7f7f7',
  },
};
