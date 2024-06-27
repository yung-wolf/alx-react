const path = require('path');

module.exports = {
  entry: './src/index.js',  // the entry file for our app
  output: {  // the bundle output path and its filename
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  module: {  // where we tell webpack how to handle different file types
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',  // the app should work in either development or production mode
  devtool: 'inline-source-map',  // use 'inline-source-map' if you are developing in a dev environment
  devServer: {  // the webpack-dev-server configuration
    hot: true,
    static: path.resolve('./dist'),
    compress: true,
    port: 3000,
  },
  performance: {
    maxAssetSize: 100000,
    maxEntrypointSize: 100000,
    hints: false
  },
};