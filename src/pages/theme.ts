import { createGlobalStyle } from 'styled-components';

export const GlobalStyling = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: "Nunito Sans", sans-serif;
    margin: 0;
  }
`;

export default {
  colors: {
    primary: '#444444',
    secondary: '#7081b3',
    tertiary: '#f7f7f7',
  },
};
