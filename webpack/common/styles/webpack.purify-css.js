const Path = require('path')
const Glob = require('glob')

const PurifyCSSPlugin = require("purifycss-webpack")

module.exports = {
    plugins : [
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute! 
            paths: Glob.sync(Path.join(__dirname, './../../../dist/*.html')),
            purifyOptions: {
                minify: true,
                info: true,
                rejected: true
            }
        })
    ]
}