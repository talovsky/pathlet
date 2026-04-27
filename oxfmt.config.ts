import { defineConfig } from 'oxfmt';

export default defineConfig({
	useTabs: true,
	arrowParens: 'avoid',
	trailingComma: 'none',
	printWidth: 120,
	sortImports: true,
	singleQuote: true,
	ignorePatterns: ['node_modules', 'out', 'dist']
});
