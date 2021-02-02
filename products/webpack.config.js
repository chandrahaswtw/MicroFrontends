const HTMLWebpackPlugin =  require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode : "development",
    devServer: {
        port : 8081
    },
    plugins : [
        new HTMLWebpackPlugin({
            template : "./public/index.html"
        }),
        new ModuleFederationPlugin({
            name : "productsREMOTE",
            filename : "RemoteEntry.js",
            exposes : {
                "./showProducts" : "./src/bootstrap"
            },
            shared : {
                faker : {
                    singleton : true
                }
            }
        })
    ]
}