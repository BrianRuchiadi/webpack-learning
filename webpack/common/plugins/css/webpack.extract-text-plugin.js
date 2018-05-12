const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    plugins: [
        new ExtractTextPlugin({
            allChunks: true,
            filename: "[name].css"
          })
    ]
}