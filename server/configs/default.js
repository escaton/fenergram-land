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
        socket: '/var/run/fenegram.sock'
    },
    static: {
        path: path.join(__dirname, '..', '..', 'static', 'dist')
    }
};
