const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');


module.exports = {
    // target: 'node',
    entry: path.resolve(__dirname, 'src/client.tsx'),
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/build/public'
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