const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const ASSETS_DIR = path.resolve(SRC_DIR, 'assets');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
    },
    devServer: {
        contentBase: DIST_DIR
    },
    resolve: {
        alias: {
            assets: path.resolve(SRC_DIR, 'assets'),
            components: path.resolve(SRC_DIR, 'components'),
            pages: path.resolve(SRC_DIR, 'pages'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        // presets: ['react', 'env'],
                        presets: [
                            "react",
                            "es2015"
                        ],
                        plugins: [
                            "transform-object-assign",
                            "babel-plugin-transform-es2015-destructuring",
                            "transform-object-rest-spread"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                include: path.resolve(SRC_DIR, 'assets'),
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../'
                    }
                }]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(ASSETS_DIR, 'main.html'),
        })
    ]
};
