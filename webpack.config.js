const path = require('path');
module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
   ],
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist')
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
   resolve: {
     extensions: ['.webpack.js', '.web.js', '.js']
   },

};
