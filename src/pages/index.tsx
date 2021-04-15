import { ThemeProvider } from "styled-components";
import LandingPage from "components/landing-page/LandingPage";
import theme, { GlobalStyling } from "../theme";

const Index = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyling />
    <LandingPage />
  </ThemeProvider>
);
export default Index;
