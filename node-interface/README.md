### Studying: [Node Interface](https://webpack.js.org/api/node/)

The `webpack/` folder is in the study is the one mordified after:

[.../book-survivejs-webpack5/wf--survivejs-webpack5/p038a--6.1-setting-up-tailwind](file:///.file/id=6571367.305787538/)



```js
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
```

In this study I learned that [webpack-plugin-serve](https://github.com/shellscape/webpack-plugin-serve) cannot work with webpack's node interface. This is because `webpackCompiler.run(handler)` will terminate the [webpack-plugin-serve](https://github.com/shellscape/webpack-plugin-serve)'s "watch" process. 

