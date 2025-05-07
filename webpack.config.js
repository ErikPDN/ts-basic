const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/A019-exercise/A019-exercise.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.frontend.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "frontend", "assets", "js"),
  },
  devtool: "source-map",
};
