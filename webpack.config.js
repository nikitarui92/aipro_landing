const webpack = require('webpack');
const path = require('path')
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge: webpackMerge} = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modeConfig = env => require(`./build-utils/webpack.${env.mode}.js`)(env);

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
  {
    from: resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
    to: 'vendor/[name].[ext]',
  },
  {
    from: resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
    to: 'vendor/bundles/[name].[ext]',
  },
  {
    from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
    to: 'vendor/[name].[ext]',
  }
];

const assets = [
  {
    from: 'src/img',
    to: 'img/'
  }
];

const plugins = [
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['docs'],
  }),
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }
  }),
  new CopyWebpackPlugin(
    {
      patterns: [
        ...polyfills,
        ...assets,
      ],
    },
  ),
];

module.exports = (argv, env) => {
  const {mode} = env

  return webpackMerge(
    {
      mode,
      output: {
        filename: '[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'docs'),
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-syntax-dynamic-import'],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    targets: '>1%, not dead, not ie 11',
                    corejs: { version: 3, proposals: true }
                  }
                ]
              ]
            }
          }
        ]
      },
      plugins
    },
    modeConfig({ mode }),
  );
};
