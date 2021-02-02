const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
    entry: "/cube.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "public/scripts"),
        filename: "cube.js"
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    plugins: [new NodemonPlugin({
        script: "./server.js",
        watch: path.resolve("./public"),
        ignore: ["*.js.map"],
        ext: "js,njk,json",
        delay: "500"
    })]
}