const config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 100,
	endOfLine: 'crlf',
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-css-order'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};

export default config;
