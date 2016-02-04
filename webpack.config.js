const pkg = require('./package.json'),
      path = require('path'),
      webpack = require('webpack'),
      HtmlwebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
    vendor: Object.keys(pkg.dependencies)
};

module.exports = {
    devServer: {
        hot: true,
        inline: true
    },
    devtool: 'source-map',
    entry: {
        app: PATHS.src,
        vendor: PATHS.vendor
    },
    resolve: {
        extensions: [ '', '.js', '.jsx', '.scss' ]
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
                loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ],
                include: PATHS.src
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
