const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack"); //plugins por defecto de webpack

module.exports = {
    entry: {
        app: ["regenerator-runtime/runtime", "./students.js"],
        appStyles: "./mystyles.css",
        //vendor: ["jquery"] //Esto ya no es necesario gracias a la seccion 'optimization', en la que incluimos todos los imports que se hacen en todos los .js nuestros (entre ellos, jquery)
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true,
                },
            },
        },
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
                /*use: [{ //loader: 'style-loader' //Este mete el css en js
                        loader: MiniCssExtractPlugin.loader //Este genera ficheros css
                    },
                    { loader: 'css-loader' }
                ]*/
                use: [MiniCssExtractPlugin.loader, "css-loader"] //Si no tienen parámetros los loaders que usemos, podemos incluirlos en un array como este
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
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css"
        })
    ]
};