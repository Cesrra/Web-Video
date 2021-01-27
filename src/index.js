import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'

ReactDOM.render(
    <React.StrictMode>
        <Hello />
    </React.StrictMode>,
    document.getElementById('app')
)
// "main": "index.js", "private": true, webpack-dev-server webpack-cli webpack
// babel-loader css-loader sass-loader mini-css-extract-plugin
// const  MiniCssExtractPlugin = require('mini-css-extract-plugin');
/*
new MiniCssExtractPlugin({
    filename: 'assets/[name].css'
}),


            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
*/