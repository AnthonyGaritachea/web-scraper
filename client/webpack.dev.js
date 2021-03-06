const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/,
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
        proxy: {
            '/scraper': 'http://localhost:5000',
            '/stories': 'http://localhost:5000'
          }
    }
}