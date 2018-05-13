const merge = require('webpack-merge');

// Production Plugins
const NotifierPlugin = require('./../common/plugins/notifications/webpack.notifier');
const SystemBellPlugin = require('./../common/plugins/notifications/webpack.system-bell');
const FaviconsPlugin = require('./../common/plugins/html/webpack.favicons');
const HtmlWebpackPlugin = require('./../common/plugins/html/webpack.html-webpack');
const CopyFilesPlugin = require('./../common/plugins/utilities/webpack.copy');
const JarvisPlugin = require('./../common/plugins/cli-dashboard/webpack.jarvis');

const ExtractTextSetup = require('./../production/webpack.extract-text');

// Development Loaders
const StyleLoaderConfig = require('./../production/loaders/webpack.styles');

module.exports = () => {
    const Plugins = merge([
        ExtractTextSetup.plugins,        
        CopyFilesPlugin,
        HtmlWebpackPlugin,
        FaviconsPlugin,  
        NotifierPlugin,
        SystemBellPlugin,
        JarvisPlugin
    ]);

    return merge.smart([
        Plugins,
        //,
        StyleLoaderConfig.styles(ExtractTextSetup.config)
    ]);
};