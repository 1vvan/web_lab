const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'rozklad.html',
      template: './src/pages/rozklad.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'news.html',
      template: './src/pages/news.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'photo.html',
      template: './src/pages/photo.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'dist/images' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
  },
};
