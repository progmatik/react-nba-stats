const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/index.js',
   ],
   output: {
     filename: './bundle.js',
     path: path.join(__dirname, 'dist')
   },
   target: 'web',
   module: {
     rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/preset-env', '@babel/preset-react'],
           plugins: ['@babel/plugin-transform-runtime']
         }
       }
     },
     { 
       test: /\.json$/, 
       use: {
         loader: 'json-loader' 
       }
     }
   ]
   },
   plugins: [
     new HtmlWebPackPlugin({
       template: "./public/index.html",
       filename: "./index.html"
     })
   ],
   devServer: {
     historyApiFallback: true,
     contentBase: path.join(__dirname, "dist"),
     compress: true,
     port: 9000
   },
   /*performance: {
     hints: process.env.NODE_ENV === 'production' ? "warning" : false
   },*/
   resolve: {
     extensions: ['.webpack.js', '.web.js', '.js']
   },
};
