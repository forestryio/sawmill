const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env = {}) => {
    return {
        entry: ['./assets/js/theme.js'],
        output: {
            path: path.resolve(__dirname, 'static'),
            filename: 'js/[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/,
                    use: ['style-loader' ,MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: 'css/[id].css'
            })
        ]
    };
}