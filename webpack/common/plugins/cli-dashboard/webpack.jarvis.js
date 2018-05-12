const JarvisPlugin = require('webpack-jarvis');
 
module.exports = {
    plugins: [
        new JarvisPlugin({
            port: 1337
        })
    ]
}