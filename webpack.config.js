const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        app: [
            "./cube.js"
        ]
    },
    output: {
        path: path.join(__dirname, "public/scripts"),
        publicPath: "public/",
        filename: "cube.js"
    }
}