const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      })]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    // new LodashModuleReplacementPlugin,
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new CompressionPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './assets/index.html'
    }),
    new MiniCssExtractPlugin(),
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false,
      }
    })
  ]
};