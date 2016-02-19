const pkg = require('./package.json'),
    path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    dist: path.join(__dirname, 'dist'),
    src: path.join(__dirname, 'src'),
    vendor: Object.keys(pkg.dependencies)
};

module.exports = {
    devServer: {
        hot: true,
        inline: true
    },
    devtool: '#inline-source-map',
    entry: {
        app: PATHS.src,
        vendor: PATHS.vendor
    },
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [ 'babel' ],
                include: PATHS.src
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlwebpackPlugin({
            title: 'Fitness',
            inject: false,
            template: './src/index.html'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'vendor' ]
        })
    ]
};
