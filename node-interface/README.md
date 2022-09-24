### Studying: [Node Interface](https://webpack.js.org/api/node/)

The `webpack/` folder is in the study is the one mordified after:

[.../book-survivejs-webpack5/wf--survivejs-webpack5/p041c-x-refactor](file:///.file/id=6571367.317445257/)

There are two study in this folder:

1. webpack-interface.js	
2. webpack-interface-watch.js



## 1. webpack-interface.js	

To run:

```
node webpack-interface.js	
```


In this study I learned that [webpack-plugin-serve](https://github.com/shellscape/webpack-plugin-serve) cannot work with webpack's node interface. This is because `webpackCompiler.run(handler)` will terminate the [webpack-plugin-serve](https://github.com/shellscape/webpack-plugin-serve)'s "watch" process. webpack-plugin-serve's server didn't even run.



## 2. webpack-interface-watch.js

To run:

```
node webpack-interface-watch.js	
```

In this study I used node-interface watch mode. 

In this case, webpack recompile when change occurs, but [webpack-plugin-serve](https://github.com/shellscape/webpack-plugin-serve) live reload does not work (I have to manually refresh the browser). 
