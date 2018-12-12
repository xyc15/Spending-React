//this is  a node script
//entry -> output
const path = require('path');
const webpack = require('webpack');
//console.log(__dirname);//path to the current location. In terminal, run: node webpack.config.js to print out this
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';//heroku will automatically set this value to production

if(process.env.NODE_ENV === 'test'){
    require('dotenv').config({path: '.env.test'});  //use a package "dotenv" to automatically get the environment configurations: https://www.npmjs.com/package/dotenv
} else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path: '.env.development'});
}
module.exports = (env) => { //module.exports is a node thing, it's a way to expose something (object in this case) to another file
    const isProduction = env === 'production';
    return {
        entry: ['babel-polyfill', './src/app'], //babel-polyfill allow application to support for a wider range of browsers
        output: {
            path: path.join(__dirname, 'public', 'dist'),//this has to be an absolute path
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //this regular expression means we just want this babel loader or plugin to be applied to javascript files and nothing else.
                exclude: /node_modules/ //we don't want to run babel through thoses libraries, they've already been processed, they've already ready for production, we don't want to make any changes to that code
            },
            // {
            //     test: /\.css$/,
            //     use: [//use allows us to provide an array of loaders
            //         'style-loader',
            //         'css-loader'
            //     ]
            // }
                {
                    test: /\.s?css$/,  //support both css and scss files
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                           {
                               loader: 'sass-loader',
                               options: {
                                   sourceMap: true
                               }
                           }
                        ]
                    })
                }
            ]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', //https://webpack.js.org/configuration/devtool/#devtool
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true ,
            //tell the dev server we're going to be handling routing via our client side code and that it should return index.html page for all routes
            publicPath: '/dist/'//https://webpack.js.org/configuration/dev-server/#devserver-publicpath-
        }
    }
}
