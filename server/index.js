'use strict';

var path = require('path'),
    recluster = require('recluster'),
    mkdirp = require('mkdirp'),
    fs = require('fs'),
    os = require('os'),
    log = require('npmlog'),
    pkg = require(__dirname + '/package.json'),
    environment = process.env.NODE_ENV

process.env.NODE_CONFIG_DIR = path.join(__dirname, 'configs');

var config = require('config'),
    prefix = 'index.js (' + config.app.version + ')';

var cluster = recluster(path.join(__dirname, 'worker.js'), {
    workers: config.cluster.workersCount
});

cluster.on('exit', function (worker) {
    if (worker.process.exitCode) {
        log.error(prefix, '[%s] Worker died (exit code: %s)',
            worker.process.pid,
            worker.process.exitCode);
    }
});
cluster.on('disconnect', function (worker) {
    log.warn(prefix, '[%s] Worker disconnected',
        worker.process.pid);
});

(function cleanupSocket() {
    var socket = config.server.socket;
    if (isNaN(socket)) {
        mkdirp.sync(path.dirname(socket));

        if (fs.existsSync(socket)) {
            fs.unlinkSync(socket);
        }
    }
})();

cluster.run();

process.on('SIGUSR2', function () {
    log.info(prefix, '[master] Got SIGUSR2, reloading cluster...');
    cluster.reload();
});

log.info(prefix, '[master] Spawned cluster, kill -s SIGUSR2', process.pid, 'to reload');

if (environment === 'development') {
    var url = 'http://' + (pkg.host || pkg.name) + '.' + process.env.USER + '.' + os.hostname() + '/';
    log.info(prefix, '[master] Site should be available on ' + url);
}
