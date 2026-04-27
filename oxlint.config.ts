import { defineConfig } from 'oxlint';

export default defineConfig({
	plugins: ['eslint', 'typescript', 'unicorn', 'promise', 'import'],
	categories: {
		correctness: 'error',
		suspicious: 'error',
		perf: 'error',
		restriction: 'error',
		style: 'warn'
	},
	options: {
		typeAware: true,
		typeCheck: true
	},
	rules: {
		'unicorn/catch-error-name': ['error', { name: 'err' }],
		'unicorn/expiring-todo-comments': 'off',
		'unicorn/filename-case': ['error', { case: 'kebabCase' }],
		'unicorn/import-style': 'off',
		'unicorn/isolated-functions': 'off',
		'unicorn/no-nested-ternary': 'off',
		'unicorn/no-null': 'off',
		'no-unused-properties': 'error',

		'no-magic-numbers': 'off',
		'sort-keys': 'off',
		'max-statements': 'off',
		'id-length': 'off',
		'capitalized-comments': 'off',
		'func-style': 'off',
		'max-params': ['error', { max: 6 }],
		'no-empty': ['error', { allowEmptyCatch: true }]
	},
	env: {
		builtin: true
	},
	ignorePatterns: ['node_modules', 'out', 'dist', '**/fixtures/**/*']
});
