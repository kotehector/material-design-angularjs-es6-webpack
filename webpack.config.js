var path = require('path');

module.exports = {
    entry: {
        app: './src/boot.js'
    },
    output: {
        filename: 'boot.bundle.js',
        path: path.resolve(__dirname + '/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: ['/node_modules/'],
            use: [{
                loader: 'babel-loader',
                options: {
                    compact: false,
                    presets: ['es2015'],
                }
            }],
        }, {
            test: /\.(scss|css)$/,
            use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }]
    }
};