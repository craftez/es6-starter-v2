const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = webpackMerge(commonConfig, {
    plugins: [
      new LiveReloadPlugin({
        port: 8080,
        appendScriptTag: true
      })
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                exclude: /node_modules/
            }
        ]
    }
});