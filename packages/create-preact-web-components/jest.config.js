const path = require('path')

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            babelConfig: false,
            tsConfig: path.resolve(__dirname, 'tsconfig.json'),
        },
    },
    roots: ['src'],
    cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/jest'),
}
