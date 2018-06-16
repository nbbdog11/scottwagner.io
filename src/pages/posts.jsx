/* eslint-disable no-undef,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import PostPreview from '../components/PostPreview';

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

const Posts = ({ data }) => {
  const { allMarkdownRemark } = data;
  const postPreviews = allMarkdownRemark.edges.map(({ node }) => buildPostPreview(node));

  return (
    <div>
      {postPreviews}
    </div>
  );
};

Posts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Posts;

export const query = graphql`
    query Posts {
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
