const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const autoprefixer = require('autoprefixer');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Starter Angular - kitconcept',
            template: 'src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),

        new ExtractTextPlugin('[name].[hash].css'),

        new ngAnnotatePlugin({
            add: true
        }),

        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080'
        })

    ],
    module: {
        preLoaders: [
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                loader: 'sasslint'
            }],
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader!css-loader') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass?sourceMap')},
            { test: /\.html$/, loader: 'raw' },
            // inline base64 URLs for <=8k images, direct URLs for the rest
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=images/[name].[ext]'},

            // helps to load bootstrap's css.
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]' }
        ]
    },
    devtool: 'eval-source-map',
    postcss: [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ],
    sasslint: {
        configFile: './.sass-lint.yml'
    }
};