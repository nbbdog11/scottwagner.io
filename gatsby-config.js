module.exports = {
  plugins: [
    'gatsby-plugin-less',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/posts/`,
      },
    },
  ],
};
