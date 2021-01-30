const path = require("path");
const NodemonWebpack = require("nodemon-webpack-plugin");

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
    watchOptions: {
        poll: 500
    },
    plugins: [new NodemonWebpack({
        script: "./server.js",
        watch: path.resolve("./public/scripts"),
        delay: 500
    })]
};