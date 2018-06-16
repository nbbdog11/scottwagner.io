/* eslint-disable no-undef,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import PostPreview from '../components/PostPreview';
import Layout from '../components/layout/Layout';

const buildPostPreview = (node) => {
  const { frontmatter, excerpt } = node;
  const { slug } = node.fields;
  const { title, date } = frontmatter;

  return (
    <PostPreview
      key={title}
      title={title}
      date={date}
      excerpt={excerpt}
      slug={slug}
    />
  );
};

const Blog = ({ data }) => {
  const { allMarkdownRemark } = data;
  const postPreviews = allMarkdownRemark.edges.map(({ node }) => buildPostPreview(node));

  return (
    <Layout title="Blog">
      {postPreviews}
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;

export const query = graphql`
    query Blog {
        allMarkdownRemark {
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
`;
