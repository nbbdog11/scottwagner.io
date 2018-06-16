/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';

const Post = ({ data }) => {
  const post = data.markdownRemark;
  const { title, date } = post.frontmatter;

  return (
    <Layout
      title={title}
      subtitle={date}
    >
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

