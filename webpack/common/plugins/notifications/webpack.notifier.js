const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
    plugins: [
        new WebpackNotifierPlugin({
            title: 'webpack learning',
            contentImage: path.join(__dirname, './../../../src/assets/images/favicons/favicon.png')}
        ),
    ]
}