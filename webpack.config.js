const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    frontend: "./frontend/src/index.tsx",
  },
  output: {
    path: path.resolve("./frontend/static/frontend/"),
    filename: "[name]-[fullhash].js",
    publicPath: "static/frontend/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleTracker({
      path: __dirname,
      filename: "./webpack-stats.json",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "./frontend/src/utils/"),
      "@services": path.resolve(__dirname, "./frontend/src/services/"),
      "@store": path.resolve(__dirname, "./frontend/src/store/"),
      "@pages": path.resolve(__dirname, "./frontend/src/pages/"),
      "@components": path.resolve(__dirname, "./frontend/src/components/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      { test: /\.(png|jpg)$/, use: [{ loader: "url?limit=8192" }] },
    ],
  },
};
