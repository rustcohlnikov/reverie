const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    reverie: [
      devMode ? './src/entry/dev.js' : './src/entry/production.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss'],
    alias: {
      '@': path.join(__dirname, '.', 'src'),
      'Components': path.join(__dirname, '.', 'src/components'),
      'Stylesheets': path.join(__dirname, '.', 'src/stylesheets')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader']
      },
      {
        
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              filename: devMode ? '[name].[contenthash].css' : '[name].css',
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({}),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin()
  ]
}