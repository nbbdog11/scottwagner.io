/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
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
