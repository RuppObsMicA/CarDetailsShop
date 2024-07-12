module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'import'],
    rules: {
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['parent', 'sibling', 'index'],
                ],
                'newlines-between': 'always',
            },
        ],
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
