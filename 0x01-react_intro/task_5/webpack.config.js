const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, use: [
        "file-loader",
        {loader: "image-webpack-loader", options: { bypassOnDebug: true, disable: true }}
      ] }
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, "public"),
    port: 8564,
    compress: true,
    open: true,
    hot: true,
  },
}