const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
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
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}`;

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve) => {
    graphql(slugQuery)
      .then((result) => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const { slug } = node.fields;
          createPage({
            path: slug,
            component: path.resolve('./src/templates/post.jsx'),
            context: {
              slug,
            },
          });
        });
        console.log(JSON.stringify(result, null, 4));
        resolve();
      });
  });
};
