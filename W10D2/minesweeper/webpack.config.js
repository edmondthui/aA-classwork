const path = require('path');

// copy and paste!
module.exports = {
    context: __dirname,
    entry: './react_minesweeper.jsx', // this should be your entry file
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js'
    }, // name of output file & where the bundled file should be created (if you leave this out you'll get the default behavior with the dist folder & your output file named main.js)
    resolve: {
        extensions: ['.js', '.jsx', '*'] // need babel to transpile jsx
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map'
};