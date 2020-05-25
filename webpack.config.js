const path = require("path");
const webpack = require("webpack");

const SERVER_ROOT = require("./package.json").homepage;

module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components|\.d\.ts$)/,
                use: [
                    "react-hot-loader/webpack",
                    "babel-loader",
                ],
            },
            {
                test: /\.d\.ts$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|ttf|woff2?|eot|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    resolve: { extensions: [".tsx", ".ts", ".js", "*"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: SERVER_ROOT + "/static/frontend/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        contentBasePublicPath: SERVER_ROOT + "/",
        port: 3000,
        publicPath: "http://localhost:3000" + SERVER_ROOT + "/static/frontend/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
