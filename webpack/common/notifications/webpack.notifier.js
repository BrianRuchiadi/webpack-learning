const path = require('path')

const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
    plugins: [
        new WebpackNotifierPlugin({contentImage: path.join(__dirname, './../../../src/assets/images/favicons/favicon.png')}),
    ]
}