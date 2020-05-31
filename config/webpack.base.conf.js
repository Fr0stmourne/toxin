const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
};

const PAGES = glob.sync(`${__dirname}/../src/pages/**/*.pug`);

module.exports = {
  // BASE config
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  stats: {
    entrypoints: false,
    children: false,
  },
  mode: 'base',
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          root: './',
        },
      },
      {
        test: /\.js$/,
        loader: this.mode === 'development' ? ['babel-loader', 'eslint-loader'] : 'babel-loader',
        exclude: '/node_modules/',
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          esModule: false,
          publicPath: './',
          outputPath: './',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          esModule: false,
        },
      },
      {
        test: /\.css$/,
        use: [this.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          this.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?url=false',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/utils/scss/variables.scss'),
                path.resolve(__dirname, '../src/utils/scss/mixins.scss'),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/fonts`,
        to: `${PATHS.assets}fonts`,
      },
    ]),
    ...PAGES.map(
      page =>
        new HtmlWebpackPlugin({
          template: `.${page.split('..')[1]}`,
          filename: `${page
            .split('/')
            .slice(-1)[0]
            .replace(/\.pug/, '.html')}`,
        }),
    ),
    // new HtmlWebpackPlugin({
    //   template: `./src/pages/index/index.pug`,
    //   filename: `index.html`,
    // }),
    // new HtmlWebpackPlugin({
    //   template: `./src/pages/colors-type/colors-type.pug`,
    //   filename: `colors-type.html`,
    // }),
    // new HtmlWebpackPlugin({
    //   template: `./src/pages/cards/cards.pug`,
    //   filename: `cards.html`,
    // }),
    // new HtmlWebpackPlugin({
    //   template: `./src/pages/form-elements/form-elements.pug`,
    //   filename: `form-elements.html`,
    // }),
    // new HtmlWebpackPlugin({
    //   template: `./src/pages/headers-footers/headers-footers.pug`,
    //   filename: `headers-footers.html`,
    // }),
    // new HtmlWebpackPlugin({
    //   template: `./src/pages/landing-page/landing-page.pug`,
    //   filename: `landing-page.html`,
    // }),
    // new HtmlWebpackPlugin({
    //   template: `./src/pages/registration-page/registration-page.pug`,
    //   filename: `registration-page.html`,
    // }),
    // new HtmlWebpackPlugin({
    //   template: `./src/pages/room-details/room-details.pug`,
    //   filename: `room-details.html`,
    // }),
    // new HtmlWebpackPlugin({
    //   template: `./src/pages/search-room/search-room.pug`,
    //   filename: `search-room.html`,
    // }),
    // new HtmlWebpackPlugin({
    //   template: `./src/pages/signin-page/signin-page.pug`,
    //   filename: `signin-page.html`,
    // }),
  ],
};
