const merge = require('webpack-merge');

// Development Plugins
const NotifierPlugin = require('./../common/plugins/notifications/webpack.notifier');
const SystemBellPlugin = require('./../common/plugins/notifications/webpack.system-bell');
const FaviconsPlugin = require('./../common/plugins/html/webpack.favicons');
const WebpackDashboardPlugin = require('./../common/plugins/cli-dashboard/webpack.dashboard');
const HtmlWebpackPlugin = require('./../common/plugins/html/webpack.html-webpack');

// Development Loaders
const CssLoadersConfig = require('./../common/loaders/webpack.css-loader');

// DevServer Config
const DevServerConfig = require('./dev-server/webpack.dev-server')

module.exports = () => {
    const Plugins = merge([
        HtmlWebpackPlugin,
        FaviconsPlugin,  
        NotifierPlugin,
        SystemBellPlugin,
        WebpackDashboardPlugin, // Plugin not ready
    ])

    return merge.smart([
        Plugins,
        //,
        DevServerConfig.devServer(),
        //
        CssLoadersConfig.cssLoader()
    ]);
};