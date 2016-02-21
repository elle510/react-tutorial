var fs = require('fs');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
	entry: {
		//app: ['./app/main.js', '.lib/index.js'],
		app: './01-hello-world/app.js'
	},

	output: {
		//path: __dirname + "/dist",
		path: path.join(__dirname, "js"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
	},

	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				query: {
                    presets: ["react", "es2015"],
                    cacheDirectory: true
                }
			}
		]
	}
}