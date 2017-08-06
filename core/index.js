var appPath = process.cwd()

global.rootRequire = function(name) {
	return require(appPath + '/' + name)
}