const path = require('path')
// const { compilerOptions } = require('./tsconfig.paths.json');

module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@styles': path.resolve(__dirname, 'src/assets/styles'),
			'@icons': path.resolve(__dirname, 'src/assets/icons'),
			'@redux': path.resolve(__dirname, 'src/redux'),
		},
	},
}
