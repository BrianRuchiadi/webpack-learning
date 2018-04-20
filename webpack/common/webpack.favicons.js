const FaviconsWebpackPlugin = require("favicons-webpack-plugin")

module.exports = {
    plugins : [
        new FaviconsWebpackPlugin({
            logo: './src/assets/images/favicons/favicon.png', // source
            prefix: 'icons/', // save location
            emitStats: false,
            statsFilename: 'iconstats.json',
            persistentCache: true,
            inject: true ,// Inject the html into the html-webpack-plugin
            background: '#fff',
            title: 'App Favicon',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: true,
                favicons: true,
                firefox: true,
                opengraph: true,
                twitter: true,
                yandex: true,
                windows: true
            }
        })
    ]
}