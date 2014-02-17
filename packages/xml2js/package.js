Npm.depends({
	"sax" : "0.5.0",
	"xmlbuilder" : "0.4.2",
	"xml2js": "0.4.1"
});
Package.on_use(function (api){
	api.export('xml2js');
	api.add_files('server.js', 'server');
});