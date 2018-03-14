import React from 'react';
import Layout from '../components/layout/Layout';
import LikesTable from '../components/about/LikesGrid';

export default () => (
  <Layout title="About">
    <div>
      My name is Scott Wagner, and I am a full-stack software developer in the Philadelphia area.
    </div>
    <LikesTable />
  </Layout>
);
