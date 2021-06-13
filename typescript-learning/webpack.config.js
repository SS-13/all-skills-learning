const { resolve } = require("path");
module.exports = {
  entry: {
    main: resolve("src/index.ts"),
  },
  module: {
    rules: [
      //   {
      //     // swc 方式
      //     test: /\.ts$/,
      //     exclude: /(node_modules|bower_components)/,
      //     use: {
      //       loader: "swc-loader",
      //     },
      //   },
      {
        // babel-loader 方式
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
