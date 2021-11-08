const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production;'
    const CSSExtract = new MiniCssExtractPlugin({filename: 'styles.css'});

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public','dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
				test: /\.s?css$/,
				// use: ['style-loader', 'css-loader', 'sass-loader']		// loaded from right to left. 'style-loader' handles in-line CSS loading
				use: [		// MiniCssExtractPlugin.loader will create a separate .CSS file. Loaded from bottom to top.
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,		// Tell each loader to create source maps
							url: false				// For the url('/images/bg.jpg') Error: Can't resolve '/images/bg.jpg' in 'c:\....'
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}]
        },
        plugins: [
            CSSExtract
        ],
        devServer: {
            static: path.join(__dirname, 'public'),
            historyApiFallback: true
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map'
    };
};