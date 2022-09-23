const webpack = require("webpack")
const webpackConfig = require("./webpack/webpack.config.js")

const webpackCompiler = webpack(webpackConfig);

const handler = (err, stats) => {
  if (err || stats.hasErrors()) {
    // The err object will not include compilation errors. Those
    // must be handled separately.
  }

  console.info('handling...')

  // The API only supports a single concurrent compilation at
  // a time. When using run or watch, call close and wait for
  // it to finish before calling run or watch again.
  webpackCompiler.close((closeErr) => {
    if (closeErr) {
      // Handle errors during close
    }
    console.info('webpack compiler closed')
  });
};

webpackCompiler.run(handler)
