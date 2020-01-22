const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    hot: true,
    open: true,
    contentBase: path.join(__dirname, 'public'),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
        },
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};