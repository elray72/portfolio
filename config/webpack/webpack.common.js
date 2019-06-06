const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
	entry: paths.entry,
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				loader: 'eslint-loader',
				exclude: /(node_modules)/,
				options: {
					emitWarning: process.env.NODE_ENV !== 'production',
				},
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-inline-loader',
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							output: paths.images,
						},
					},
				],
			},
			{
				test: /\.(woff2|ttf|woff|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							output: paths.fonts,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			'react-dom': '@hot-loader/react-dom'
		}
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.template,
		}),
	],
};
