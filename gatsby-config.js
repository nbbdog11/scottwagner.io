/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/posts/`
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        images: path.join(__dirname, "src/images"),
        pages: path.join(__dirname, "src/pages")
      }
    }
  ]
};
