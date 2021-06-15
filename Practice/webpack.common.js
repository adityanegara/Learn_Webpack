const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
     entry : "./src/index.js",
     plugins : [new HtmlWebpackPlugin({
         template : "./src/template.html"
     })],
     module:{
         rules: [
            {
                test: /\.s[ac]ss$/i,
                use : ["style-loader" ,"css-loader", "sass-loader"]
            },
            {
                test : /\.html$/,
                loader : 'html-loader'
            },
            {
                test: /\.(svg|png|jpg|gif)/,
                type : 'asset/resource'
            }
           

         ]
    }
}