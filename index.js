"use strict";
/// <reference path="types/winston.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const winstonConfig = require("winston/lib/winston/config");
exports.Log = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            formatter(options) {
                let prefix = winstonConfig.colorize(options.level, '>>');
                return `${prefix} ${options.message}`;
            }
        })
    ]
});
//# sourceMappingURL=index.js.map