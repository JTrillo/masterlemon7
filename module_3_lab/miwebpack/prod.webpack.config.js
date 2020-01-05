const merge = require('webpack-merge');
const base = require('./base.webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
    output: {
        filename: "[name][chunkhash].js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass")
                    },
                },
            ],
        }, ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].css',
        }),
    ],
    mode: 'production',
});