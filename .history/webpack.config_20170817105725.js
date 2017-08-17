module.exports = {
    entry: {
        app: './app/src/boot.js'
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/dist'
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