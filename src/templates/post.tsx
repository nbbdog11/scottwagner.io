import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ThemeProvider } from "styled-components";
import Layout from "components/layout/Layout";
import theme, { GlobalStyling } from "pages/theme";
import Link from "components/Link";

type PostProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      };
      body: string;
    };
  };
};
const Post: React.FC<PostProps> = ({ data }) => {
  const post = data.mdx;
  const { title, date } = post.frontmatter;

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{`Scott Wagner | ${title}`}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyling />
      <Layout title={title} subtitle={date}>
        <MDXProvider components={{ a: Link }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </Layout>
    </ThemeProvider>
  );
};

export default Post;

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
