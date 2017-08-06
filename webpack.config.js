const path = require('path');

var config = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },

  devServer: {
    inline: true,
    port: 7777,
    contentBase: __dirname + '/public/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpe?g$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
};

module.exports = config;
