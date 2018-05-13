const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, './../../../../src/assets/images/'),
                to: 'assets/images/',
                toType: 'dir'
            }
        ]),
    ]
}