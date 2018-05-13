const merge = require('webpack-merge')

const DevelopmentConfig = require('./webpack/development/webpack.development');
const ProductionConfig = require('./webpack/production/webpack.production');

module.exports = (mode = 'development') => {
    console.log({
        "all Dev config": DevelopmentConfig.apply(),
        "all Prod config": ProductionConfig.apply()
    })
    switch (mode) {
        case 'production':
            return ProductionConfig.apply();
        case 'development':
            return DevelopmentConfig.apply();
    }
};