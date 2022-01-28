const path = require("path");
const webpack = require("webpack");
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const DEV = process.env.NODE_ENV !== "production";
const BUILD_GLOBALS = {
  __DEV__: DEV,
  "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
};

module.exports = {
  context: __dirname,
  entry: "./index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "cart.js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/dist"
  },
  resolve: {
    extensions: [".json", ".webpack.js", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            rootMode: "root"
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            rootMode: "root"
          }
        }
      },
      // // {
      // //   test: /\.css$/,
      // //   exclude: /node_modules/,
      // //   loader: ExtractTextPlugin.extract(
      // //     'css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      // //   )
      // // },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: ExtractTextPlugin.extract({
      //     use: ["css-loader?localIdentName=[name]__[local]___[hash:base64:5]", "sass-loader"]
      //   })
      // },
      {
        test: /\.(jpeg|png|woff|woff2|eot|ttf|svg|gif)$/,
        //loader: "url-loader?limit=100000",
        use:[{
          loader: "url-loader",
          options: {
                        limit: 1000
                    }
        }]
      }
    ].concat(
      DEV
        ? [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: "babel-loader"
            }
          ]
        : []
    )
  },
  plugins: [
    new webpack.DefinePlugin(BUILD_GLOBALS),
    new MiniCssExtractPlugin({
      filename: "style.css"
      //allChunks: true
    })
  ].concat(
    DEV
      ? [
          // new BundleAnalyzerPlugin()
        ]
      : [new webpack.optimize.AggressiveMergingPlugin()]
  ),
  //devtool: DEV ? "#inline-source-map" : false,
  cache: DEV,
  devServer: {
    hot: true,
    port: 443,
    compress: false,
    http2: true
  },
};
