const CreateWebpackCompiler = require("webpack")

const {getConfig} = require("./webpack/webpack.config.js")

const webpackConfig = getConfig('development')
console.dir(webpackConfig, {depth: 8})



const handler = (err, stats) => {
  if (err || stats.hasErrors()) {
    // The err object will not include compilation errors. Those
    // must be handled separately.
  }
  console.info('handling...')
}

const watchOpts = {
    // Example [watchOptions](/configuration/watch/#watchoptions)
  aggregateTimeout: 300,
  poll: undefined
}

const webpackCompiler = CreateWebpackCompiler(webpackConfig);
const watching = webpackCompiler.watch(watchOpts, handler)
