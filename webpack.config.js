const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "my-botui"
    },
    module: {
        rules: [
            {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
            {
				test: /\.scss$/,
				use: ['style-loader', 'css-loader'],
				include: path.resolve(__dirname, './src')
			}
        ]
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    externals: {
        react: "react"
    }
}