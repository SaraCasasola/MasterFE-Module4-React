const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const basePath = __dirname;

module.exports = {    
	context: path.join(basePath, "src"),
	resolve: {
		extensions: [".js", ".ts", ".tsx"]
	},
	entry: {
		app: "./index.tsx"
	},
	stats: "errors-only",
	output: {
		filename: "[name].[chunkhash].js",
	},
	module: {
		rules: [
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader",
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						{
							loader: "sass-loader",
							options: {
								implementation: require("sass")
							}
						},
					]
				},
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader"
					]
				},
				{
					test: /\.(png|jpg)$/,
					exclude: /node_modules/,
					loader: "url-loader?limit=5000",
				},
				{
					test: /\.html$/,
					loader: "html-loader",
				}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
				filename: "index.html", 
				template: "index.html",
				hash: true
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
	  }),
	]
};