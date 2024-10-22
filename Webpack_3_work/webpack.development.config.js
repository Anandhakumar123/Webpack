const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/components/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `[name].bundle.js`,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      path: "index.html",
    }),
  ],
};
