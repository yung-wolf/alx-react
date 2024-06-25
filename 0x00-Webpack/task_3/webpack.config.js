const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    header: "./modules/header/header.js",
    body: "./modules/body/body.js",
    footer: "./modules/footer/footer.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
    clean: true
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
  mode: "development",
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
    hints: false
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, "public"),
    port: 8564,
    compress: true,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Task 3"
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
