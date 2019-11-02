const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  merge(commonConfig, {
    mode: "production",
    entry: path.resolve(__dirname + "/br/com/nsbruno/src/plugin.js"),
    output: {
      filename: "my-component-vuejs.min.js",
      libraryTarget: "window",
      library: "MyComponentVuejs"
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    externals: [nodeExternals()]
  }),
  merge(commonConfig, {
    mode: "production",
    entry: path.resolve(__dirname + "/br/com/nsbruno/src/plugin.js"),
    output: {
      filename: "my-component-vuejs.js",
      libraryTarget: "umd",
      library: "my-component-vuejs",
      umdNamedDefine: true
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    externals: [nodeExternals()]
  })
];
