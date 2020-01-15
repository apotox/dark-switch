
const path = require("path")

module.exports = {
  entry: './src/DarkSwitch.js',

  output: {
    path: path.resolve('lib'),
    filename: 'DarkSwitch.js',
    libraryTarget: 'commonjs2'
  },

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
        use: ['style-loader','css-loader'],
       
      }
    ]
  }
};