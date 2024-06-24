const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
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
  mode: "production",
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
    hints: false
  }
}
