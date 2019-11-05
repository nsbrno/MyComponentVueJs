const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  output: {
    path: path.resolve(__dirname + "/dist/")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        //exclude: /node_modules/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader"
            // Requires sass-loader@^8.0.0
            /**options: {
                              implementation: require('sass'),
                              sassOptions: {
                                  fiber: require('fibers'),
                                  indentedSyntax: true // optional
                              },
                          },*/
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".vue", ".css", ".scss"],
    // Adicionar aqui os camhinhos para o webpack achar cada arquivo
    alias: {
      vue$: path.resolve(__dirname, "./node_modules/vue/dist/vue.esm.js"),
      mixins: path.resolve(__dirname, "./br/com/nsbruno/src/mixins"),
      components: path.resolve(__dirname, "./br/com/nsbruno/src/components")
    },
    modules: ["./node_modules", "node_modules"]
  },
  devServer: {
    //open: true,
    open: "chrome",
    hot: true,
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./br/com/nsbruno/src/app/index.html")
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VuetifyLoaderPlugin()
  ]
};
