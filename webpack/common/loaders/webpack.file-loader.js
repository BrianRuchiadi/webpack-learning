exports.fileLoader = () => ({
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "file-loader", 
              options: {
                  emitFile: true,
                  name: "[path][name].[ext]"
              }
            }
          ]
        }
      ]
    }
  })