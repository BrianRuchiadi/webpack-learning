const merge = require('webpack-merge');

// Development Plugins
const NotifierPlugin = require('./../common/plugins/notifications/webpack.notifier');
const SystemBellPlugin = require('./../common/plugins/notifications/webpack.system-bell');
const FaviconsPlugin = require('./../common/plugins/html/webpack.favicons');
const WebpackDashboardPlugin = require('./../common/plugins/cli-dashboard/webpack.dashboard');
const JarvisPlugin = require('./../common/plugins/cli-dashboard/webpack.jarvis');
const HtmlWebpackPlugin = require('./../common/plugins/html/webpack.html-webpack');
const CopyFilesPlugin = require('./../common/plugins/utilities/webpack.copy');

// Development Loaders
const CssLoadersConfig = require('./../common/loaders/webpack.css-loader');
const JsLoaderConfig = require('./../common/loaders/webpack.js-loader');

// DevServer Config
const DevServerConfig = require('./dev-server/webpack.dev-server')

module.exports = () => {
    const Plugins = merge([
        CopyFilesPlugin,
        HtmlWebpackPlugin,
        FaviconsPlugin,  
        NotifierPlugin,
        SystemBellPlugin,
        WebpackDashboardPlugin, 
        JarvisPlugin
    ]);

    return merge.smart([
        Plugins,
        //,
        DevServerConfig.devServer(),
        //
        JsLoaderConfig.jsLoader(),
        CssLoadersConfig.cssLoader()
    ]);
};