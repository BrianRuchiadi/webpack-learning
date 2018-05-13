const { ImageminWebpackPlugin } = require('imagemin-webpack');

const ImageMinGifSicle = require("imagemin-gifsicle");
const ImageMinJpegTran = require("imagemin-jpegtran");
const ImageMinOptiPng = require("imagemin-optipng");
const ImageMinSvgo = require("imagemin-svgo");

module.exports = {
    plugins: [
        new ImageminWebpackPlugin({
            cache: true,
            bail: true,
            name: "[path][name].[ext]",
            imageminOptions: {
                plugins: [
                    ImageMinGifSicle({
                        interlaced: true
                    }),
                    ImageMinJpegTran({
                        progressive: true
                    }),
                    ImageMinOptiPng({
                        optimizationLevel: 5
                    }),
                    ImageMinSvgo({
                        removeViewBox: true
                    })
                ]
            }
        })
    ]
}