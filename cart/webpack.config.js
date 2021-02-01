const HTMLWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode : "development",
    devServer : {
        port : 8082
    },
    plugins: [
        new HTMLWebPackPlugin({
            template : "./public/index.html"
        }),
        new ModuleFederationPlugin({
            name : "cartREMOTE",
            filename : "RemoteEntry.js",
            exposes : {
                "./showCart" : "./src/index"
            },
            shared : ["faker"]
        })
    ] 
}