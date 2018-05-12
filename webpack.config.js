const merge = require('webpack-merge')

const DevelopmentConfig = require('./webpack/development/webpack.development');

module.exports = (mode = 'development') => {
    // console.log({
    //     "all Dev config": DevelopmentConfig.apply(),
    //     "mode " : mode
    // })
    switch (mode) {
        case 'production':
            return;
        case 'development':
            return DevelopmentConfig.apply();
    }
};