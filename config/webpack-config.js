/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = (env, options) => {
  const config = {
    entry: [resolve('./src/main.js'), resolve('./src/styles/app.css')],
    output: {
      filename: 'bundle.js',
      path: resolve('./dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': resolve('./src'),
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          enforce: 'pre',
          options: {
            emitWarning: true,
            failOnError: true,
            failOnWarning: true,
          },
        },
        {
          test: /\.(gif|jpg|png)\??.*$/,
          loader: 'url-loader?limit=8192',
        },
      ],
    },
  };

  if (options.mode === 'development') {
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        filename: './index.html',
        template: './index.html',
      }),
      new MiniCssExtractPlugin({ filename: 'app.css' }),
    ];

    config.devtool = 'inline-source-map';

    config.devServer = {
      hot: true,
      host: '127.0.0.1',
      contentBase: resolve('dist'),
      stats: {
        color: true,
      },
    };
  } else {
    config.plugins = [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: 'app.css' }),
    ];
  }

  return config;
};
