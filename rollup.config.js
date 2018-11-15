// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'build/src/appl-app.js',
	output: {
		file: 'build/src/bundle.js',
		format: 'cjs',
	},
	plugins: [
		resolve(),
	],
};
