import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Blog from '../components/blog/Blog';
import theme, { GlobalStyling } from './theme';

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyling />
    <StaticQuery
      query={graphql`
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
    `}
      render={Blog}
    />
  </ThemeProvider>
);
