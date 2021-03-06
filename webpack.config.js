var webpack = require('webpack');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: "/dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: ["babel-loader"],
				
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!autoprefixer-loader"
			},
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
			}
		]
	}
};







