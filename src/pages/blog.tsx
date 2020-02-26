import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import BlogComponent from "components/blog/Blog";
import theme, { GlobalStyling } from "./theme";

const Blog = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyling />
    <StaticQuery
      query={graphql`
        {
          allMdx(sort: { order: DESC, fields: frontmatter___date }) {
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
      render={BlogComponent}
    />
  </ThemeProvider>
);

export default Blog;
