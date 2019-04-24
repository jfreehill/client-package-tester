const path = require('path');

module.exports = {
  entry: './.tmp/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
