/* eslint-disable no-undef */
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: ["./js/index.js", "./scss/style.scss"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "scripts.js",
    publicPath: "./",
  },
  devServer: {
    stats: "errors-only",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loader: {
            scss: "vue-style-loader!css-loader!sass-loader",
          },
        },
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ["pug-plain-loader"],
          },
          {
            use: ["raw-loader", "pug-plain-loader"],
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "style-resources-loader",
            options: {
              patterns: [
                "./scss/colors.scss",
                "./scss/heading.scss",
                "./scss/paragraph.scss",
              ],
            },
          },
        ],
      },
      {
        test: /\.(svg|png|gif|jpe?g)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path][name].[ext]",
              publicPath: "/",
              limit: 8000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./pug/index.pug",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "./assets", to: "assets" }],
    }),
  ],
};
