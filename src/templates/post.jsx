/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout/Layout';
import theme, { GlobalStyling } from '../pages/theme';

const Post = ({ data }) => {
  const post = data.markdownRemark;
  const { title, date } = post.frontmatter;

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{`Scott Wagner | ${title}`}</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyling />
      <Layout
        title={title}
        subtitle={date}
      >
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </ThemeProvider>
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
