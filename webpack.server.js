const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const webpackBase = require("./webpack.base");

const webpackMerge = require("webpack-merge");
const config = {
  entry: "./src/index.js",
  target: "node",
  externals: [webpackNodeExternals()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
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

module.exports = webpackMerge(config, webpackBase);
