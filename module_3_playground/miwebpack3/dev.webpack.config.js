const merge = require('webpack-merge');
const base = require('./base.webpack.config');

module.exports = merge(base, {
    output: {
        filename: '[name].js', //chunkhash en desarrollo no, porque es incompatible con algunas librerías de desarrollo
    },
    module: {
        rules: [{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                            localsConvention: 'camelCase',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development',
    devtool: 'inline-source-map',
});