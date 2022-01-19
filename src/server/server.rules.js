function setup(fs, path, express, loggingHelper, bodyParser, rotatingFileStream) {
    fs = fs || require('fs');
    path = path || require('path');
    express = express || require('express');
    loggingHelper = loggingHelper || require('morgan');
    bodyParser = bodyParser || require('body-parser');
    rotatingFileStream = rotatingFileStream || require('rotating-file-stream');

    // PORT this service runs on //
    const PORT = process.env.PORT || 15678;

    // HOST this service is found on //
    const HOST = process.env.HOST || '127.0.0.1';

    // middleware //
    const server = express;

    // RequestId middleware plugin //
    const requestId = require('@m1yh3m/requestid.middleware')().requestid;

    const logger = (() => {
        // file logger //
        const stream = (() => {
            const logDirectory = path.join(__dirname, '../../log');
            // ensure that log directory exists
            fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
            const rfsOptions = {
                action: rotatingFileStream.createStream,
                filename: 'server.log',
                options: {
                    size: '100M', // rotate every 10 MegaBytes written
                    interval: '1d', // rotate daily
                    compress: 'gzip', // compress rotated files
                    path: logDirectory
                }
            };
            return rfsOptions.action(rfsOptions.filename, rfsOptions.options);
        })();

        // logger //
        return loggingHelper('combined', {stream});
    })();

    // Modules this service has. //
    const modules = {
        uniqueid: require('../modules/uniqueid/uniqueid.module')
    };

    // Exit password @TODO: changeit //
    const EXIT = {
        PASSWORD: 'password@123',
        DURATION: 60 * 60 * 1000
    };

    return {
        PORT,
        HOST,
        server,
        bodyParser,
        modules,
        logger,
        EXIT,
        requestId
    };
}

module.exports = setup;
