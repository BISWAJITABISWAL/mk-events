const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./server/index.js"],

  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|png|PNG|svg|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img/",
              publicPath: "img/",
            },
          },
        ],
      },
    ],
  },
};
