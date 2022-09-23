const { WebpackPluginServe } = require("webpack-plugin-serve")

const devServer = () => {
  const out = {
    watch: true,
    plugins: [
     new WebpackPluginServe(
       {
         port: process.env.PORT || 8080,
         static: './dist',
         liveReload: true,
         waitForBuild: true,
         host:'127.0.0.1' // you have set host if you use Safary
       }
     )
   ]
  }
  return out
}

module.exports = devServer
