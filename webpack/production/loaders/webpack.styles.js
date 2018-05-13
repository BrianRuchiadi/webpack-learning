exports.styles = (ExtractTextSetup) => {
    return {
      module: {
        rules: [
          {
            test: /\.(s*)css$/,
            exclude: /node_modules/,
            use: ExtractTextSetup.extract({
              fallback: "style-loader",
              use: [
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
            })
          },
        ],
      }
    }
  };