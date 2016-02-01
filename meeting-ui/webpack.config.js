module.exports = {
	context: __dirname + "/src",
	
	entry: {
	  javascript: "./app.jsx",
	  html: "./index.html",
	},

	output: {
		filename: "app.js",
		path: __dirname + "/dist",
	},

	module: {
		loaders: [
 			{
		        test: /.jsx?$/,
		        loader: 'babel-loader',
		        exclude: /node_modules/,
		        query: {
					presets: ['es2015', 'react']
				}
        	},
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]"
			}
		]
	}
};
