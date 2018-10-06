const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',
  plugins: [
    new ForkTsCheckerWebpackPlugin({ vue: true })
  ],
}

