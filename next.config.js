module.exports = {
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/johnscottwagner/image/upload/",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
