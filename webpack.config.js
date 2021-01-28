const path = require("path");
const nodemonwebpack = require("nodemon-webpack-plugin");

module.exports = {
    entry: "./background.js",
    output: {
        path: path.join(__dirname, "public/scripts"),
        filename: "background.js",
        sourceMapFilename: "background.js.map"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    mode: "development",
    plugins: [new nodemonwebpack({
        script: "./server.js",
        watch: path.resolve("./public/scripts"),
        verbose: true
    })]
};