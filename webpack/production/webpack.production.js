const merge = require('webpack-merge');

// Production Plugins
const NotifierPlugin = require('./../common/plugins/notifications/webpack.notifier');
const SystemBellPlugin = require('./../common/plugins/notifications/webpack.system-bell');
const FaviconsPlugin = require('./../common/plugins/html/webpack.favicons');
const HtmlWebpackPlugin = require('./../common/plugins/html/webpack.html-webpack');
const CopyFilesPlugin = require('./../common/plugins/utilities/webpack.copy');
const ImageOptimizePlugin = require('./../common/plugins/assets/webpack.image-optimize');

const ExtractTextSetup = require('./../production/webpack.extract-text');

// Development Loaders
const StyleLoaderConfig = require('./../production/loaders/webpack.styles');
const FileLoaderConfig = require('./../common/loaders/webpack.file-loader');

module.exports = () => {
    const Plugins = merge([
        ExtractTextSetup.plugins,        
        CopyFilesPlugin,
        ImageOptimizePlugin,
        HtmlWebpackPlugin,
        FaviconsPlugin,  
        NotifierPlugin,
        SystemBellPlugin,
    ]);

    return merge.smart([
        Plugins,
        //,
        FileLoaderConfig.fileLoader(),
        StyleLoaderConfig.styles(ExtractTextSetup.config)
    ]);
};