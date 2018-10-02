/* eslint-disable no-undef,react/forbid-prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import PostPreview from '../components/PostPreview';
import Layout from '../components/layout/Layout';

const buildPostPreview = (node) => {
  const { frontmatter, excerpt } = node;
  const { slug } = node.fields;
  const { title, date } = frontmatter;

  return (
    <div>
      <Helmet>
        <title>Scott Wagner | Blog</title>
      </Helmet>
      <PostPreview
        key={title}
        title={title}
        date={date}
        excerpt={excerpt}
        slug={slug}
      />
    </div>
  );
};

const Blog = (data) => {
  const { allMarkdownRemark } = data;
  const postPreviews = allMarkdownRemark.edges.map(({ node }) => buildPostPreview(node));

  return (
    <Layout title="Blog">
      {postPreviews}
    </Layout>
  );
};

export default () => (
  <StaticQuery
    query={
      graphql`
        {
          allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
            edges {
              node {
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                }
                fields {
                  slug
                }
                excerpt
              }
            }
          }
        }
      `
    }
    render={Blog}
  />
);
