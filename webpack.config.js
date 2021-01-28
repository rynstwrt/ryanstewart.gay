const path = require("path");

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
    mode: "development"
};