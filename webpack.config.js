var webpack    = require('webpack');
var path       = require('path');
var util       = require('gulp-util');
var config     = require('./gulp/config');

function createConfig(env) {
    var isProduction, webpackConfig;

    if (env === undefined) {
        env = process.env.NODE_ENV;
    }

    isProduction = env === 'production';

    webpackConfig = {
        context: path.join(__dirname, config.src.js),
        entry: {
            'main-page': './main-page.js',
            'common-page': './common-page.js',
            'where-to-buy-page': './where-to-buy-page.js'
        },
        output: {
            path: path.join(__dirname, config.dest.js),
            filename: '[name].js',
            publicPath: isProduction ? '/wp-content/themes/rezult/js/' : 'js/'
        },
        devtool: isProduction
            ? '#source-map'
            : '#cheap-module-eval-source-map',
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                filename: '[name].js',
                minChunks: 2
            }),
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
                },
                 {
                     test: /\.(nunj|nunjucks)$/,
                     include: __dirname + '/src',
                     loader: 'nunjucks'
                 }
            ]
        }
    };

    if (isProduction) {
        webpackConfig.plugins.push(
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        );
    }

    return webpackConfig;
}

module.exports = createConfig();
module.exports.createConfig = createConfig;
