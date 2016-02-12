var webpack    = require('webpack');
var path       = require('path');
var config     = require('./gulp/config');
var production = config.production;

var webpackConfig = {
    context: path.join(__dirname, config.src.js),
    entry: {
        // vendor: ['jquery'],
        app: './app.js'
    },
    output: {
        path: path.join(__dirname, config.dest.js),
        filename: '[name].js',
        publicPath: 'js/'
    },
    devtool: production ? 'source-map' : 'cheap-module-eval-source-map',
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: '[name].js',
        //     minChunks: Infinity
        // }),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};

if (production) {
    webpackConfig.plugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

module.exports = webpackConfig;
