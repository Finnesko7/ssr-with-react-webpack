const path = require("path");


module.exports = {
    target: "node",
    entry: "./src/client.js",
    output: {
        path: path.join(__dirname, "/dist/public"),
        filename: "app.js"
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
    }
};