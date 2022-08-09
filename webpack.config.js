const path = require('path')
const BundleTracker = require('webpack-bundle-tracker')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    frontend: './frontend/src/index.tsx',
  },
  output: {
    path: path.resolve('./frontend/static/frontend/'),
    filename: '[name]-[fullhash].js',
    publicPath: 'static/frontend/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleTracker({
      path: __dirname,
      filename: './webpack-stats.json',
    }),
  ],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, './frontend/src/utils/'),
      '@services': path.resolve(__dirname, './frontend/src/services/'),
      '@store': path.resolve(__dirname, './frontend/src/store/'),
      '@pages': path.resolve(__dirname, './frontend/src/pages/'),
      '@components': path.resolve(__dirname, './frontend/src/components/'),      
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}