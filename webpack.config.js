const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 9000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('src', 'index.template.html'),
      inject: 'body'
    })
  ]
};
