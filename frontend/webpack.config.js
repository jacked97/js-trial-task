const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: './index.web.js',
    resolve: {
        extensions: ['.web.ts', '.web.tsx', '.ts', '.tsx', '.web.js', '.js', '.json'],
        alias: {
            'react-native$': 'react-native-web',
            'react-native-fast-image$': 'react-native-web',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        historyApiFallback: true,
        port: 4000,
        open: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(true), // 👈 or use: process.env.NODE_ENV !== 'production'
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
