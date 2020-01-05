const merge = require('webpack-merge');
const prod = require('./prod.webpack.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(prod, {
    plugins: [new BundleAnalyzerPlugin()]
});