const CreateWebpackCompiler = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const {getConfig} = require("./webpack/webpack.config.js")

const webpackConfig = getConfig('development')
console.dir(webpackConfig, {depth: 8})

const webpackCompiler = CreateWebpackCompiler(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };

const server = new WebpackDevServer(devServerOptions, webpackCompiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();
