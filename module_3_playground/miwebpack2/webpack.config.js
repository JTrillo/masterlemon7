const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack"); //plugins por defecto de webpack
const path = require('path');

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    entry: {
        app: ["regenerator-runtime/runtime", "./students.tsx"],
        appStyles: "./mystyles.scss",
        vendorStyles: ['../node_modules/bootstrap/dist/css/bootstrap.css'],
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
    devtool: "inline-source-map", //Para debugar .ts en Chrome
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    "babelCore": "@babel/core", // needed for Babel v7
                },
            },
            {
                //test: /\.js$/,
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
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
            },
            {
                test: /\.css$/,
                //exclude: /node_modules/, //Comentamos esto para que pueda funcionar bootstrap.css
                /*use: [{ //loader: 'style-loader' //Este mete el css en js
                        loader: MiniCssExtractPlugin.loader //Este genera ficheros css
                    },
                    { loader: 'css-loader' }
                ]*/
                use: [MiniCssExtractPlugin.loader, "css-loader"] //Si no tienen parámetros los loaders que usemos, podemos incluirlos en el array directamente
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                //loader: "file-loader",
                loader: 'url-loader?limit=500' //si pesa menos de 500 bytes, mete la imagen en el bundle
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ],
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
        }),
    ],
};