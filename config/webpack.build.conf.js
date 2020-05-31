const merge = require('webpack-merge');
const TinyPngWebpackPlugin = require('tinypng-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

const build = merge.strategy({
  plugins: 'prepend',
})(baseWebpackConfig, {
  plugins: [new CleanWebpackPlugin()],
});

const buildWebpackConfig = merge(build, {
  mode: 'production',
  output: {
    publicPath: './',
  },
  plugins: [
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new TinyPngWebpackPlugin({
      ext: ['png', 'jpeg', 'jpg'],
      key: 'RsCZev1geyFwOKznstLNGmxugsTZZmG6',
    }),
  ],
});

module.exports = new Promise(resolve => {
  resolve(buildWebpackConfig);
});
