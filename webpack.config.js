const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

const ENV = process.env.NODE_ENV || 'development';

let config = {
  mode: ENV,
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js'
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
  ],

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      }
    ]
  },

  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/
        }
      },
    }
  }
};

if (ENV === 'production') {
  config.optimization = Object.assign(config.optimization || {}, {
    minimize: true,
    minimizer: [new TerserPlugin()]
  })
}

module.exports = config;
