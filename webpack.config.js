const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./sovetnik-changer.js",
  output: {
    filename: "sovetnik-changer.min.js",
    path: path.resolve(__dirname),
    library: "sovetnikChanger",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: ["add-module-exports"]
          }
        }
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};