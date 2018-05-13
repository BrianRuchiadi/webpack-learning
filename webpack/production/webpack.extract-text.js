const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.config = new ExtractTextPlugin({
    allChunks: true,
    filename: "[name].css"
})

exports.plugins = {
    plugins: [
        new ExtractTextPlugin({
            allChunks: true,
            filename: "[name].css"
        })
    ]
}