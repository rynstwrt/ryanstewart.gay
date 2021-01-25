const path = require("path");

module.exports = {
    entry: "./main.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    mode: "development"
};