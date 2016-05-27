'use strict';

let util = require('util'),
    winston = require('winston'),
    winston_config = require('winston/lib/winston/config');

/**
 * Logger.<info | warn | error | log >
 * @author Alexander Abashkin <monolithed@gmail.com>
 */
let Logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            formatter (options) {
                let prefix = winston_config.colorize(options.level, '>>');

                return `${prefix} ${options.message}`;
            }
        })
    ]
});

Logger.on('logging', (transport, level) => {
    if (level === 'fatal') {
        process.exit(4);
    }
});

module.exports = Logger;
