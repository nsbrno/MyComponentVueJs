const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "./br/com/nsbruno/src/app/main.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./www")
  }
});
