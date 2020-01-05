const merge = require('webpack-merge');
const base = require('./base.webpack.config');

module.exports = merge(base, {
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                "style-loader",
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
    devServer: {
        port: 8087
    },
    mode: 'development',
});