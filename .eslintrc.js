module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:class-property',
		'plugin:react/recommended',
	],
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
	},
	rules: {
		'react/prop-types': 0,
		'no-var': 0,
		'no-console': 0,
		'prefer-rest-params': 0,
		'max-len': ['error', 120],
		'comma-dangle': 0,
		'require-jsdoc': 0,
		'padded-blocks': 0,
		'prefer-spread': 0,
		'no-use-before-define': 'error',
		'no-undef-init': 'error',
		'semi': ['error', 'always'],
		'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
	},
	env: {
		browser: true,
		node: true,
		jasmine: true,
	},
	globals: {}
};
