global.Promise = require('bluebird');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var dev = process.env.ENV !== 'production';
var noop = function () {};

module.exports = {
    entry: {
        ios: __dirname + '/js/ios.entry.js',
        android: __dirname + '/js/android.entry.js',
        desktop: __dirname + '/js/desktop.entry.js',
        'ios.tpl': 'file?name=ios.index.html!jade-html!' + __dirname + '/jade/ios.index.jade',
        'android.tpl': 'file?name=android.index.html!jade-html!' + __dirname + '/jade/android.index.jade',
        'desktop.tpl': 'file?name=desktop.index.html!jade-html!' + __dirname + '/jade/desktop.index.jade',
        'ios.boarding.tpl': 'file?name=ios.boarding.html!jade-html!' + __dirname + '/jade/ios.boarding.jade'
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
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(dev)
        }),
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
