'use strict';

var path = require('path');

module.exports = {
    app: {
        version: '0'
    },
    cluster: {
        workersCount: 1
    },
    server: {
        socket: 8081
    },
    static: {
        path: path.join(__dirname, '..', '..', 'static', 'dist')
    }
};
