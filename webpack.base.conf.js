const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'web/src')
        }
    },
    entry: {
        app: 'web/src/main.js'
    },
    plugins: [
        // ...
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'web/public/index.html'
        })
    ],
    mode: 'development',
    devtool: 'eval-source-map',
}
