const merge = require('webpack-merge');
const TinyPngWebpackPlugin = require('tinypng-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
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
