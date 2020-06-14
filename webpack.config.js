const path = require("path");
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
    target: "node",
    entry: "./server.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]
};