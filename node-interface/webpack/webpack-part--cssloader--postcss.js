const tailwindcss = require('tailwindcss')

postcss = () => ({
  loader: "postcss-loader",
  options: {
    postcssOptions: { plugins: [tailwindcss] }
  }
});

module.exports = postcss;
