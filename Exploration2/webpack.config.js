const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // Handling CSS Files
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // Handling Images
      { test: /\.(png|svg|jpg|gif)$/, include: path.resolve(__dirname, 'src/images'), use: ['file-loader']},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'file-loader' }
      // Below are extra loaders that were used in the webpack tutorial

      // // Handling Fonts
      // { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
      // // Handling CSV Data Files
      // { test: /\.(csv|tsv)$/, use: ['csv-loader']},
      // // Handling XML Data Files
      // { test: /\.xml$/, use: ['xml-loader']}
    ]
  }
};
