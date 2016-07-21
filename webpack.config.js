var webpack = require("webpack");

module.exports = {

    entry: { aleph:'./src/index.js' },

    output: {
        path : __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
