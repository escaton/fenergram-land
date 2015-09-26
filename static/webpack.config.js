global.Promise = require('bluebird');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var dev = process.env.ENV !== 'production';
var noop = function () {};

module.exports = {
    entry: {
        ios: __dirname + '/js/ios.entry.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
            { test: /\.css$/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.png$/,  loader: "url-loader?limit=100000" }
        ]
    },
    resolve: {
        alias: {
            /*'jquery': 'jquery/dist/jquery' + (dev ? '' : '.min') + '.js',*/
            'owl.carousel': 'owl.carousel/dist/owl.carousel.min.js'
        },
        root: __dirname,
        modulesDirectories: ['bower_components', 'node_modules']
    },
    noParse: [
        /*/[\/\\]bower_components[\/\\](jquery|owl\.carousel).*!/*/
    ],
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ], ["normal", "loader"]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        !dev ? new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false,
            mangle: {
                except: []
            }
        }) : noop
    ]
};
