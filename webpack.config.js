module.exports = {
    entry:'./src/DarkSwitch.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ['css-loader'],
        }
      ]
    }
};