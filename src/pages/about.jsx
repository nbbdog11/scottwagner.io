import React from 'react';
import { Helmet } from 'react-helmet';
import 'typeface-nunito-sans';
import Layout from '../components/layout/Layout/Layout';
import LikesTable from '../components/about/LikesGrid/LikesGrid';

export default () => (
  <div>
    <Helmet>
      <title>Scott Wagner | About</title>
    </Helmet>
    <Layout title="About">
      <div>
        My name is Scott Wagner, and I am a full-stack software developer in the Philadelphia area.
      </div>
      <LikesTable />
    </Layout>
  </div>
);
