// define dev config
const config = {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
}

module.exports = config
