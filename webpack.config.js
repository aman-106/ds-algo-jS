var path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/test.js'),
    output: {
        filename: (chunkData) => {
            return chunkData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
        },
        path: path.join(__dirname, '/dist'),
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
}