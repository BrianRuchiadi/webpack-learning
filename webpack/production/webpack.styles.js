const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCssPlugin = require('./../common/styles/webpack.purify-css')

exports.styles = ({ include, exclude} = {}) => {
    const ExtractTextSetup = new ExtractTextPlugin({
      allChunks: true,
      filename: "[name].css"
    })

    return {
      module: {
        rules: [
          {
            test: /\.(s*)css$/,
            include,
            exclude,
    
            use: ExtractTextSetup.extract({
              fallback: "style-loader",
              use: [
                {
                  loader: "css-loader",
                  options: {
                    root: '/',
                    url: false,
                    import: true,
                    modules: false, // enable / disable CSS modules
                    minimize: true,
                    sourceMap: false, // enable / disable source map
                    camelCase: false, // Export Classnames in CamelCase
                    importLoader: 1
                  }
                },
                {
                  loader: "sass-loader"
                }
              ]
            })
          },
        ],
      },
      plugins: [
        ExtractTextSetup,
        ...PurifyCssPlugin.plugins
      ]
    }
  };