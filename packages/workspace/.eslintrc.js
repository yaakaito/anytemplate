module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    plugins: [
        'react',
    ],
    rules: {
        'react/jsx-uses-vars': 1,
        'react/prop-types': 0,
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
}
