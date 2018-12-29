const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path')
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('./public'),
        filename: 'bundled.js'
    },
    watch: true,
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        }]
    },
    stats: {
        errorDetails: true
    },
    plugins: [htmlPlugin],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
};