import React from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "components/layout/Layout";
import LikesTable from "components/about/LikesGrid";
import theme, { GlobalStyling } from "./theme";

const About = () => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <title>Scott Wagner | About</title>
    </Helmet>
    <GlobalStyling />
    <Layout title="About">
      <div>
        My name is Scott Wagner, and I am a full-stack software developer in the
        Philadelphia area.
      </div>
      <LikesTable />
    </Layout>
  </ThemeProvider>
);

export default About;
