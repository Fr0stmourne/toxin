const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
};

const PAGES_DIR = `${PATHS.src}/`;
// let PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));
let PAGES = [];
glob(`${__dirname}/../src/pages/**/*.pug`, {}, (err, files) => {
  console.warn('ФАЙЛЫ', files);

  PAGES = files;
});

module.exports = {
  // BASE config
  externals: {
    paths: PATHS,
  },
  entry: {
    app: ['@babel/polyfill', PATHS.src],
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/',
  },
  mode: 'base',
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.js$/,
        loader: this.mode === 'development' ? ['babel-loader', 'eslint-loader'] : 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: [this.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          this.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          // MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `${PATHS.src}/js/postcss.config.js`,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
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
                path: `${PATHS.src}/js/postcss.config.js`,
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
                path.resolve(__dirname, '../src/scss/utils/variables.scss'),
                path.resolve(__dirname, '../src/scss/utils/mixins.scss'),
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new CopyWebpackPlugin([
      // {
      //   from: `${PATHS.src}/img`,
      //   to: `${PATHS.assets}img`,
      // },
      {
        from: `${PATHS.src}/fonts`,
        to: `${PATHS.assets}fonts`,
      },
      {
        from: `${PATHS.src}/components`,
        to: `${PATHS.assets}components`,
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)/,
      //   to: `${PATHS.assets}img`,
      // },
    ]),
    // ...PAGES.map(
    //   page =>
    //     new HtmlWebpackPlugin({
    //       template: `.${page.split('..')[1]}`,
    //       filename: `${page
    //         .split('/')
    //         .slice(-1)[0]
    //         .replace(/\.pug/, '.html')}`,
    //     }),
    // ),
    new HtmlWebpackPlugin({
      template: `./src/pages/index/index.pug`,
      filename: `index.html`,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/colors-type/colors-type.pug`,
      filename: `colors-type.html`,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/cards/cards.pug`,
      filename: `cards.html`,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/form-elements/form-elements.pug`,
      filename: `form-elements.html`,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/headers-footers/headers-footers.pug`,
      filename: `headers-footers.html`,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/landing-page/landing-page.pug`,
      filename: `landing-page.html`,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/registration-page/registration-page.pug`,
      filename: `registration-page.html`,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/room-details/room-details.pug`,
      filename: `room-details.html`,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/search-room/search-room.pug`,
      filename: `search-room.html`,
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/signin-page/signin-page.pug`,
      filename: `signin-page.html`,
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  ],
};
