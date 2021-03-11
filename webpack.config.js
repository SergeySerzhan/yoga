const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin=require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const devtool = function () {
  if (isDev) return "source-map";
  else "";
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "bundle[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: './dist',
    port: 4200,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: path.resolve(__dirname, 'src/img'),
            to: path.resolve(__dirname, 'dist/img')
          },
        ],
      }
    ),
    new MiniCssExtractPlugin(),
  ],
  devtool: devtool(),
  module: {
    rules: [
      {
        test: /s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.png|\.jpg/,
        type: 'asset',
      }
    ],
  },
};
