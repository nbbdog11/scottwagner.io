import React from "react";
import { Helmet } from "react-helmet";
import PostPreview from "./PostPreview";
import Layout from "components/layout/Layout";

type PostPreviewNode = {
  frontmatter: {
    title: string;
    date: string;
  };
  excerpt: string;
  fields: {
    slug: string;
  };
};
const buildPostPreview = (node: PostPreviewNode) => {
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

type BlogProps = {
  allMdx: {
    edges: { node: PostPreviewNode }[];
  };
};

const Blog: React.FC<BlogProps> = ({ allMdx }) => {
  const postPreviews = allMdx.edges.map(({ node }) => buildPostPreview(node));

  return <Layout title="Blog">{postPreviews}</Layout>;
};

export default Blog;
