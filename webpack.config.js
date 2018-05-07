const path = require('path');
var webpack = require('webpack');

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'socialQuiz.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            },{
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: "./src/fonts/[name].[ext]", // Output below ./fonts
                    publicPath: "./", // Take the directory into account
                  },
            }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public')
        }
    };
   
};