import * as assert from 'assert';
import * as colors from 'colors';
import * as stdout from 'intercept-stdout';
import { Log } from '../';

describe('Basic behaviour', () => {
	it('Compare output', () => {
		let actual = '';
		let message = 'test';

		let intercept = stdout(output => actual += output);

		Log.info(message);

		intercept();

		assert.equal(actual, `${colors.green('>>')} ${message}\n`);
	});
});
