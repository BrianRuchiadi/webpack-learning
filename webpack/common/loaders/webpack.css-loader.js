exports.cssLoader = () => ({
    module: {
      rules: [
        {
          test: /\.(s*)css$/,
          use: [
            {
              loader: "style-loader", 
            },
  
            {
              loader: "css-loader",
              options: {
                root: '/',
                url: false,
                import: true,
                modules: false, // enable / disable CSS modules
                minimize: true,
                sourceMap: false, // enable / disable source map
                camelCase: false, // Export Classnames in CamelCase
                importLoader: 1
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    }
  })