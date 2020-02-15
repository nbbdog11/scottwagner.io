import React from "react";
import { ThemeProvider } from "styled-components";
import LandingPage from "components/landing-page/LandingPage";
import theme, { GlobalStyling } from "./theme";

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyling />
    <LandingPage />
  </ThemeProvider>
);
