const merge = require('webpack-merge')

const NotifierPlugin = require('./webpack/common/notifications/webpack.notifier')
const SystemBellPlugin = require('./webpack/common/notifications/webpack.system-bell')
const FaviconsPlugin = require('./webpack/common/webpack.favicons')
const HtmlWebpackPlugin = require('./webpack/common/webpack.html-webpack')
const ErrorOverlayPlugin = require('./webpack/common/webpack.error-overlay')
const WebpackDashboardPlugin = require('./webpack/common/webpack.dashboard')

const DevStyleConfig = require('./webpack/common/styles/webpack.loadCSS')
const DevServerConfig = require('./webpack/development/webpack.devServer');

const ProdStyleConfig = require('./webpack/production/webpack.styles.js')

const DevelopmentCommonConfig = merge([
   {
       plugins: [
            ...NotifierPlugin.plugins,
            ...SystemBellPlugin.plugins,
            ...FaviconsPlugin.plugins,
            ...HtmlWebpackPlugin.plugins,
            ...ErrorOverlayPlugin.plugins,
            ...WebpackDashboardPlugin.plugins,
       ],       
   },
   DevStyleConfig.loadCSS()
])

const DevelopmentConfig = merge([
    DevServerConfig.devServer()
])

const ProductionCommonConfig = merge([
    ProdStyleConfig.styles()
])

const ProductionConfig = null

module.exports = (mode) => {
    console.log({
        "mode mode": mode
    })
    switch (mode) {
        case 'production':
            return merge(ProductionCommonConfig, ProductionConfig, { mode })
        case 'development':
            return merge(DevelopmentCommonConfig, DevelopmentConfig, { mode })
    }
}