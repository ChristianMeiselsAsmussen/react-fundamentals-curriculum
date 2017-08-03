var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules:[
			{ test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
			{ 
				test: /\.css$/, 
				use: [ 
					'style-loader', 
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{ loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } }
				],
				exclude: /\.index.css$/
			}
		] 
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		})
	]
};