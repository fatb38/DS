module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:storybook/recommended',
        'prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {
                allowConstantExport: true
            }
        ]
    }
};
