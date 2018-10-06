import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PostPreview from './PostPreview';
import Layout from '../layout/Layout/Layout';

const buildPostPreview = (node) => {
  const { frontmatter, excerpt } = node;
  const { slug } = node.fields;
  const { title, date } = frontmatter;

  return (
    <div key={slug}>
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

const Blog = ({ allMarkdownRemark }) => {
  const postPreviews = allMarkdownRemark.edges.map(({ node }) => buildPostPreview(node));

  return (
    <Layout title="Blog">
      {postPreviews}
    </Layout>
  );
};

const nodeShape = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  excerpt: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

Blog.propTypes = {
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.arrayOf(nodeShape),
  }).isRequired,
};

export default Blog;
