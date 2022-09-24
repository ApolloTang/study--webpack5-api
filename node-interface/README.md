### Studying: [Node Interface](https://webpack.js.org/api/node/)

The `webpack/` folder is in the study is the one mordified after:

[.../book-survivejs-webpack5/wf--survivejs-webpack5/p041c-x-refactor](file:///.file/id=6571367.317445257/)

In this study I learned that [webpack-plugin-serve](https://github.com/shellscape/webpack-plugin-serve) cannot work with webpack's node interface. This is because `webpackCompiler.run(handler)` will terminate the [webpack-plugin-serve](https://github.com/shellscape/webpack-plugin-serve)'s "watch" process. 

