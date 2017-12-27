var path = require('path');

module.exports = {
    entry: {
        App: "./app/scripts/app.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/scripts"),
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}