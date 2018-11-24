const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');


module.exports = {
    target: 'node',
    entry: './server.tsx',
    output: {
        filename: 'server_bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(tsx|ts)?$/,
            loader: 'awesome-typescript-loader',
            options: {
                jsx: 'react'
            }
        }]
    },
    plugins: [
        new CheckerPlugin()
    ]
}