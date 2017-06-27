var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    // minimize: true
                }
            }]
        }]
    },
    plugins: [
	    new HtmlWebpackPlugin({  // Also generate a test.html 
	      filename: 'index.html',
	      template: 'index.html'
	    }),
        new ExtractTextPlugin('../css/index.css'),
	]
};
