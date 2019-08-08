const path = require('path')
const commonPaths = require('./common-paths')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

console.log(path.resolve(__dirname, '../', 'src/common/'))
// Define Common config.
const config = {
  // Define entry point
  entry: {
    app: './src/index.tsx',
  },
  // define output
  output: {
    filename: '[name].bundle.js',
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  // resolve for ts tsx js and json
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    //create alias to import easier
    alias: {
      common: path.resolve(__dirname, '../', 'src/common'),
      assets: path.resolve(__dirname, '../', 'src/assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000 },
          },
        ],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  // optimize with splitChunks
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
        },
      },
    },
  },
  plugins: [
    // This empties the dist folder
    new CleanWebpackPlugin(),
    // This console logs the progress of the bundling
    new webpack.ProgressPlugin(),
    // This injects all dependencies to index.html automatically
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
}

module.exports = config
