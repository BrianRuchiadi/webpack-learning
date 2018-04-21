exports.autoprefixer = () => ({
    loader: "postcss-loader",
    options: {
      plugins: () => [require("autoprefixer")()],
    },
  });