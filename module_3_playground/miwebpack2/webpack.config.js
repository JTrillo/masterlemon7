const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack"); //plugins por defecto de webpack

module.exports = {
    entry: {
        app: ["regenerator-runtime/runtime", "./students.js"],
        appStyles: "./mystyles.css",
        vendor: ["jquery"]
    },
    output: {
        filename: "[name].[chunkhash].js" //incluye un hash al bundle para que siempre que se haga un build nuevo el nombre del fichero cambie para que el navegador lo tenga que volver a cargar
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    devServer: {
        port: 8084
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", //este es el nombre que va a la carpeta dist
            template: "index.html", //este es el fichero de origen
            //hash: true, //incluye un hash al bundle para que siempre que se haga un build nuevo el nombre del fichero cambie para que el navegador lo tenga que volver a cargar
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};