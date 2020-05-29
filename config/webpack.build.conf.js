const merge = require('webpack-merge');
const TinyPngWebpackPlugin = require('tinypng-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  output: {
    publicPath: './',
  },
  plugins: [
    new TinyPngWebpackPlugin({
      ext: ['png', 'jpeg', 'jpg'],
      key: 'RsCZev1geyFwOKznstLNGmxugsTZZmG6',
    }),
  ],
});

module.exports = new Promise(resolve => {
  resolve(buildWebpackConfig);
});
