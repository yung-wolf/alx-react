const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: "./js/dashboard_main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" }
    ]
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["mozjpeg", { quality: 60, progressive: true }],
              ["optipng", { optimizationLevel: 5 }]
            ]
          }
        }
      })
    ]
  },
  mode: "production",
  performance: {
    maxAssetSize: 244000,
    hints: false
  }
}
