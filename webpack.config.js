const path = require("path");

module.exports = {
    entry: "public/scripts/background.ts",
    output: {
        filename: "backgroundoutput.js",
        path: path.resolve(__dirname, "public/scripts")
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