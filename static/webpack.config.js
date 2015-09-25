var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.png$/, loader: "url-loader?limit=100000" }
        ]
    },
    resolve: {
        alias: {
            'jquery': __dirname + '/bower_components/jquery/dist/jquery.js',
            'owl.carousel': __dirname + '/bower_components/owl.carousel/dist/owl.carousel.min.js'
        }
    },
    noParse: [
        /[\/\\]bower_components[\/\\](jquery|owl\.carousel).*!/
    ],
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};
