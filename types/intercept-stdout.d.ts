declare module 'intercept-stdout' {
	interface stdout {
		(fn: (output: string) => void): () => void;
	}

	const stdout: stdout;

	export = stdout;
}
