const HTMLWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode : "development",
    devServer : {
        port : 8080
    },
    plugins : [
        new HTMLWebPackPlugin({
            template : "./public/index.html"
        }),
        new ModuleFederationPlugin({
            name : "container",
            remotes : {
                cartHOST : "cartREMOTE@http://localhost:8082/RemoteEntry.js",
                productsHOST : "productsREMOTE@http://localhost:8081/RemoteEntry.js"
            }
        })
    ] 
}