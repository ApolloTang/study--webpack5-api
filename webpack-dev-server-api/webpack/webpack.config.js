const { merge } = require('webpack-merge')

const part_page = require('./webpack-part--page.js')
const part_loadCss = require('./webpack-part--load-css.js')
const part_extractCss = require('./webpack-part--extract-css.js')


const cssloader_postcss = require('./webpack-part--cssloader--postcss/')

const commonConfig = merge([
  {
    entry: [ './src/main.js' ]
  },
  part_page({title:'demo'}),
])


const productionConfig = merge([
  part_extractCss({
    loaders: [cssloader_postcss()]
  })
])


const developmentConfig = merge([
  part_loadCss({
    loaders: [cssloader_postcss()]
  })
])


const getConfig = (mode, debug=false) => {
  switch (mode) {
    case 'production':
      return merge(commonConfig, productionConfig, {mode: !debug ? mode : 'none'})
    case 'development':
      return merge(commonConfig, developmentConfig, {mode})
    default:
      throw new Error(`Trying to use an unknow mode, ${mode}`)
  }
}

module.exports = {
  getConfig
}
