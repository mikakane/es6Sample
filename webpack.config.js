module.exports = {
	"entry": {
        "common":"./es6/common.js"
    },
	"output": {
		"filename": "public/js/webpack.js"
	},
    module: {
        loaders: [
            { test: /\.js/, loader: "babel" },
        ]
    },
    resolve: {
        extensions:["",".js"]
    }
}