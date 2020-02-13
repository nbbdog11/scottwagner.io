import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout/Layout';
import LikesTable from '../components/about/LikesGrid/LikesGrid';
import theme, { GlobalStyling } from './theme';

export default () => (
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
