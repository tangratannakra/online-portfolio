const path = require('path');
var urix = require("urix"); 

//plugin stack for postCSS
const postCssPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundeled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: (app, server)=>{
            server._watch("./app/**/*.html");
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000
    },
    mode: 'development',
    module: {
       rules: [
                {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    //postCss
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postCssPlugins
                        }
                    }
                  ]
                }
            ]   
            }
}