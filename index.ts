/// <reference path="types/winston.d.ts" />

import * as winston from 'winston';
import * as winstonConfig from 'winston/lib/winston/config';

export const Log = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			formatter (options) {
				let prefix = winstonConfig.colorize(options.level, '>>');

				return `${prefix} ${options.message}`;
			}
		})
	]
});
