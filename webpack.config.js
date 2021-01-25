const path = require("path");

module.exports = {
    entry: "/js/background.ts",
    output: {
        filename: "backgroundoutput.js",
        path: path.resolve(__dirname, "js")
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