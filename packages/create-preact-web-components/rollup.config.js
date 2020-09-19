const path = require('path')
const typescript = require('rollup-plugin-typescript2')
const commonjs = require('rollup-plugin-commonjs')
const alias = require('@rollup/plugin-alias')
const nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve
const terser = require('rollup-plugin-terser').terser

module.exports = [
    {
        input: path.resolve(__dirname, './src/index.tsx'),
        output: {
            file: path.resolve(__dirname, './dist/index.rollup.js'),
            format: 'cjs',
            // sourcemap: 'inline',
        },
        plugins: [
            typescript(),
            alias({
                entries: [
                  { find: 'react', replacement: 'preact/compat' },
                  { find: 'react-dom', replacement: 'preact/compat' }
                ]
            }),
            nodeResolve({ browser: true }),
            commonjs(),
            terser(),
        ],
        watch: {
            includes: 'src/**',
        },
    }
]
