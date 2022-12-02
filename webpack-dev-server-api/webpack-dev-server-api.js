const CreateWebpackCompiler = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const {getConfig} = require("./webpack/webpack.config.js")

const webpackConfig = getConfig('development')
console.dir(webpackConfig, {depth: 8})

const webpackCompiler = CreateWebpackCompiler(webpackConfig);
const devServerOptions = {
  // ...webpackConfig.devServer,
  port: 9999,
  host: '0.0.0.0',
  open: true,

  hot: true, // Dev server client for web socket transport, hot and live reload logic
  client : {
    logging: 'info',
    overlay: { errors: true, warnings: true }
  }
};

const server = new WebpackDevServer(devServerOptions, webpackCompiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();
