const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

const slugQuery = `
{
  allMdx {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(slugQuery)
      .then((result) => {
        result.data.allMdx.edges.forEach(({ node }) => {
          const { slug } = node.fields;
          createPage({
            path: slug,
            component: path.resolve('./src/templates/post.tsx'),
            context: {
              slug,
            },
          });
        });
        resolve();
      });
  });
};
