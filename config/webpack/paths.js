const path = require('path');

const root = path.resolve(__dirname, '../../');

module.exports = {
  root,
  output: path.resolve(root, 'dist'),
  entry: path.resolve(root, 'src/index.js'),
  template: path.resolve(root, 'src/index.html'),
  build: 'config',
  config: 'config',
  images: 'img',
  fonts: 'fonts',
  css: 'css',
  js: 'js',
  theme: 'src/themes/_default',
};
