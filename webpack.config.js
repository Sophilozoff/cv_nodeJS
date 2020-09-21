const path = require('path');

module.exports = {
    entry: './app.js',
    output  : {
        path: path.resolve(__dirname, 'public/dist'),
        filename : 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: 'file-loader',
            }
        ],
    },

};