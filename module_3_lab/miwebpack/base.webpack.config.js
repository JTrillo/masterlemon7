const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    entry: {
        app: ["regenerator-runtime/runtime", "./index.tsx"],
        appStyles: "./styles.scss",
    },
    module: {
        rules: [{
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=500' //si pesa menos de 500 bytes, mete la imagen en el bundle
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    "babelCore": "@babel/core", // needed for Babel v7
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", //Name of file in ./dist/
            template: "index.html", //Name of template in ./src
        }),
    ],
};