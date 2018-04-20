const merge = require('webpack-merge')

const NotifierPlugin = require('./webpack/common/notifications/webpack.notifier')
const SystemBellPlugin = require('./webpack/common/notifications/webpack.system-bell')
const FaviconsPlugin = require('./webpack/common/webpack.favicons')
const HtmlWebpackPlugin = require('./webpack/common/webpack.html-webpack')
const ErrorOverlayPlugin = require('./webpack/common/webpack.error-overlay')

const DevServerConfig = require('./webpack/development/webpack.devServer')

const DevelopmentCommonConfig = merge([
   {
       plugins: [
            ...NotifierPlugin.plugins,
            ...SystemBellPlugin.plugins,
            ...FaviconsPlugin.plugins,
            ...HtmlWebpackPlugin.plugins,
            ...ErrorOverlayPlugin.plugins
       ] 
   }
])

const DevelopmentConfig = merge([
    DevServerConfig.devServer()
])

module.exports = mode => {
    switch (mode) {
        case 'production':
            return
        case 'development':
            return merge(DevelopmentCommonConfig, DevelopmentConfig, { mode })
    }
}