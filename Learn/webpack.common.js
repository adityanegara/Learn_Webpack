 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const path = require("path");
 module.exports = {
     entry: {
       main : "./src/index.ts",
     
     },
     plugins:[new HtmlWebpackPlugin({
       template : "./src/template.html"
     })],
     module:{
         rules: [
          
             {
          
               test : /\.html$/,
               loader : 'html-loader',
             },
             {
               test: /\.(svg|png|jpg|gif)/,
               type : 'asset/resource'
             }
            
             
        ]
     },
     resolve: {
        extensions: ['.ts', '.js'],
     },
     devtool: 'eval-source-map'
 }