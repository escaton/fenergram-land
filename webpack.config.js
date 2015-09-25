var path = require('path');

module.exports = {
    entry: './js/entry.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" }
        ]
    }
};