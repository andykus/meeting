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
         },
         { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
      ]
   }
};
