const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  output: {
    path: __dirname + '/review_build',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  performance: {
    hints: false,
  },
};
